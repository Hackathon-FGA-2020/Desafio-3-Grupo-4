import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  onPress,
  StatusBar,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import { RadioButton } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";

export default class Busca extends Component {

  state = {
    DATAcategorias: [
      {
        id: "0",
        nome: "Alface",
      },
      {
        id: "1",
        nome: "Tomate",
      },
      {
        id: "2",
        nome: "Laranja",
      },
      {
        id: "3",
        nome: "Graviola",
      },
      {
        id: "4",
        nome: "Jabuticaba",
      },
      {
        id: "5",
        nome: "Pepino",
      },
      {
        id: "6",
        nome: "Cebola",
      },
    ],
    DATAvendedores: [
      {
        id: "0",
        nome: "Nivaldo",
        foto: "./img/vendedor/perfil.png",
      },
      {
        id: "1",
        nome: "Maria",
        foto: "./img/vendedor/perfil.png",
      },
      {
        id: "2",
        nome: "Pedro",
        foto: "./img/vendedor/perfil.png",
      },
      {
        id: "3",
        nome: "Jorje",
        foto: "./img/vendedor/perfil.png",
      },
      {
        id: "4",
        nome: "Ana",
        foto: "./img/vendedor/perfil.png",
      },
      {
        id: "5",
        nome: "Glória",
        foto: "./img/vendedor/perfil.png",
      },
    ],
  };

  renderObjeto = ({ item }) => (
    <TouchableOpacity onPress={() => console.log("click")}>
      <View style={styles.objeto}>
        <Image
          style={styles.fotoObjeto} //Mudar para foto da catetegoria
          source={require("./img/vendedor/perfil.png")}
        />
        <Text style={styles.nomeObjeto}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );

  qualObjetoMarcado = () => {
    if (this.state.value === "vendedores") {
      return this.state.DATAvendedores;
    } else {
      return this.state.DATAcategorias;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />

        <View style={styles.busca}>
          <TextInput
            style={styles.campoDeBusca}
            placeholder="Pesquisar"
            underlineColorAndroid="white"
            value={this.state.text}
            onChangeText={(text) => console.log(text)}
            autoCorrect={false}
          />
        </View>

        <View style={styles.listagem}>
          <View style={styles.escolhaDaBusca}>
            <RadioButton.Group
              onValueChange={(value) => this.setState({ value })}
              value={this.state.value}
            >
              <View style={styles.botoes}>
                <Text>Categorias</Text>
                <RadioButton
                  status="checked"
                  color="#71AFA7"
                  value="categorias"
                />
              </View>

              <View style={styles.botoes}>
                <Text>Vendedores</Text>
                <RadioButton color="#71AFA7" value="vendedores" />
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.itensListados}>
            <SafeAreaView>
              <FlatList
                columnWrapperStyle={styles.linhaDaColunaDasCategorias}
                data={this.qualObjetoMarcado()}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={this.renderObjeto}
                showsVerticalScrollIndicator={false}
              />
            </SafeAreaView>
          </View>
        </View>
      </View>
    );
  }
}
