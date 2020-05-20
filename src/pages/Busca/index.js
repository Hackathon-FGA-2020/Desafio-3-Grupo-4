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
    search: false,
    value: null,
    DATAcategorias: this.props.route.params.DATAcategorias,
    DATAvendedores: this.props.route.params.DATAvendedores,
    searchedDATA: false,
  };

  renderObjeto = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        if (this.state.value === "vendedores") {
          this.props.navigation.navigate("PerfilPublico");
        } else {
          this.props.navigation.navigate("Categoria");
        }
      }}
    >
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
            onChangeText={(text) => {
              console.log(text);
              if (text !== "") {
                this.setState({
                  search: true,
                  searchedDATA: this.qualObjetoMarcado().filter((item) =>
                    item.nome.toLowerCase().startsWith(text.toLowerCase())
                  ),
                });
              } else {
                this.setState({ search: false });
              }
            }}
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
                data={
                  this.state.search === true
                    ? this.state.searchedDATA
                    : this.qualObjetoMarcado()
                }
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
