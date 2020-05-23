import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { styles } from "./styles";

import { getCollection } from "../../api";

export default class Inicial extends Component {
  state = {
    loading: true,
    DATAcategorias: null,
    DATAvendedores: [
      {
        id: "0",
        nome: "Nivaldo",
        foto: require("./img/vendedor/perfil.png"),
      },
      {
        id: "1",
        nome: "Maria",
        foto: require("./img/vendedor/perfil.png"),
      },
      {
        id: "2",
        nome: "Pedro",
        foto: require("./img/vendedor/perfil.png"),
      },
      {
        id: "3",
        nome: "Jorje",
        foto: require("./img/vendedor/perfil.png"),
      },
      {
        id: "4",
        nome: "Ana",
        foto: require("./img/vendedor/perfil.png"),
      },
      {
        id: "5",
        nome: "Glória",
        foto: require("./img/vendedor/perfil.png"),
      },
    ],
  };

  setCategorias(data) {
    let result = [];
    data.forEach((item) =>
      result.push({ id: item.id, nome: item.data.title, foto: item.data.img })
    );
    return result;
  }

  async componentDidMount() {
    this.setState({
      DATAcategorias: this.setCategorias(await getCollection("categories")),
      loading: false,
    });
  }
  renderVendedor = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.navigate("Login");
      }}
    >
      <View style={styles.perfil}>
        <Image style={styles.fotoVendedor} source={item.foto} />
        <Text style={styles.nome}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );
  renderCategoria = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.navigate("Categoria", {
          categoryId: item.id,
        })
      }
    >
      <View style={styles.categoria}>
        <Image
          style={styles.fotoCategoria} //Mudar para foto da catetegoria
          source={null} // coloquei null por enquanto pra tirar o warning
        />
        <Text style={styles.nomeCategoria}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { loading } = this.state;
    return loading ? (
      <View
        style={{
          flex: 1,
          backgroundColor: "#2194BF",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator color={"white"} size={"large"} />
      </View>
    ) : (
      <View style={styles.container}>
        <StatusBar hidden />

        <View style={styles.opcoes}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("PerfilPrivado")}
            onLongPress={() => this.props.navigation.navigate("PerfilPublico")}
          >
            <Image
              style={styles.botaoPerfil}
              source={require("./img/vendedor/perfil.png")}
            />
          </TouchableOpacity>

          <View style={styles.carrinhoBusca}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Carrinho")}
            >
              <Image
                style={styles.botaoCarrinho}
                source={require("./img/icones/cesta.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Busca", {
                  DATAcategorias: this.state.DATAcategorias,
                  DATAvendedores: this.state.DATAvendedores,
                })
              }
            >
              <Image
                style={styles.botaoPesquisa}
                source={require("./img/icones/lupa.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.vendedores}>
          <Text style={styles.titulo}> Vendedores </Text>

          <View style={styles.listaVendedores}>
            <SafeAreaView>
              <FlatList
                data={this.state.DATAvendedores}
                keyExtractor={(item) => item.id}
                renderItem={this.renderVendedor}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </SafeAreaView>
          </View>
        </View>

        <View style={styles.categorias}>
          <Text style={styles.titulo}>Categorias</Text>

          <View style={styles.listaCategorias}>
            <SafeAreaView>
              <FlatList
                columnWrapperStyle={styles.linhaDaColunadasCategorias}
                data={this.state.DATAcategorias}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={this.renderCategoria}
                showsVerticalScrollIndicator={false}
              />
            </SafeAreaView>
          </View>
        </View>
      </View>
    );
  }
}
