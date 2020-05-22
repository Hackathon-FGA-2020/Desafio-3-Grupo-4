import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  onPress,
  StatusBar,
} from "react-native";
import { styles } from "./styles";
import { FlatList } from "react-native-gesture-handler";


export default class Inicial extends Component {
  state = {
    DATAcategorias: [
      {
        id: "0",
        nome: "Alface",
        foto: require("./img/icones/alface.png")
      },
      {
        id: "1",
        nome: "Banana",
        foto: require("./img/icones/cachoBanana.png")
      },
      {
        id: "2",
        nome: "Laranja",
        foto: require("./img/icones/laranja.png")
      },
      {
        id: "3",
        nome: "Milho",
        foto: require("./img/icones/milho.png")
      },
      {
        id: "4",
        nome: "Brócolis",
        foto: require("./img/icones/brocolis.png")
      },
      {
        id: "5",
        nome: "Uvas",
        foto: require("./img/icones/uva.png")
      },
      {
        id: "6",
        nome: "Cebola",
        foto: require("./img/icones/cebola.png")
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

  renderVendedor = ({ item }) => (
    <TouchableOpacity onPress={() => { this.props.navigation.navigate("Login") }}>
      <View style={styles.perfil}>
        <Image
          style={styles.fotoVendedor}
          source={require("./img/vendedor/perfil.png")}
        />
        <Text style={styles.nome}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );

  renderCategoria = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate("Categoria")}
    >
      <View style={styles.categoria}>
        <Image
          style={styles.fotoCategoria}//Mudar para foto da catetegoria
          source = {item.foto} 
        />
        <Text style={styles.nomeCategoria}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
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
              onPress={() =>
                this.props.navigation.navigate("Carrinho", {
                  ProdutosCarrinho: this.state.ProdutosCarrinho,
                })
              }
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
