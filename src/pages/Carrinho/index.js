import React, { Component } from "react";
import { Text, View, StatusBar, Image, Alert } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

import { styles } from "./styles";

class Carrinho extends Component {
  state = {
    DATAcarrinho: [
      {
        id: "0",
        nome: "Alface",
        proprietario: "Pedro",
        preco: 1.9,
      },
      {
        id: "1",
        nome: "Tomate",
        proprietario: "Jorge",
        preco: 1.9,
      },
      {
        id: "2",
        nome: "Laranja",
        proprietario: "Paulo",
        preco: 1.9,
      },
      {
        id: "3",
        nome: "Graviola",
        proprietario: "Lucas",
        preco: 1.9,
      },
      {
        id: "4",
        nome: "Jabuticaba",
        proprietario: "Judas",
        preco: 1.9,
      },
      {
        id: "5",
        nome: "Pepino",
        proprietario: "João",
        preco: 1.9,
      },
      {
        id: "6",
        nome: "Cebola",
        proprietario: "Tiago",
        preco: 1.9,
      },
    ],
  };

  button = (item) => {
    console.log(item);
    Alert.alert("AVISO", "Você realmente deseja remover este produto ?", [
      { text: "Não" },
      {
        text: "Sim",
        onPress: () => {
          this.removerProduto(item.id);
        },
      },
    ]);
  };

  removerProduto = (id) => {
    this.props.removeCart(id);
    Alert.alert("Produto removido!");
  };

  renderLista = ({ item }) => (
    <View style={styles.informacoesDoProduto}>
      <View style={styles.produto}>
        <Text style={styles.nomeProduto}>{item.nome}</Text>
        <Text style={styles.nomeVendedor}>Qtd: QTD</Text>
        <Text style={styles.nomeVendedor}>{item.proprietario}</Text>
      </View>
      <View style={styles.valor}>
        <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
      </View>
      <View style={styles.campoRemover}>
        <TouchableOpacity onPress={() => this.button(item)}>
          <Image
            style={styles.fotoBotaoRemover}
            source={require("./img/sinal-menos.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  calcularTotalDoCarrinho = () =>
    this.state.DATAcarrinho.reduce(
      (total, valor) => total + valor.preco,
      0
    ).toFixed(2);

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />

        <View style={styles.tituloSituacao}>
          <Text style={styles.titulo}>Situação da Cesta</Text>
        </View>

        <View style={styles.produtosNoCarrinho}>
          <FlatList
            data={this.state.DATAcarrinho}
            keyExtractor={(item) => item.id}
            renderItem={this.renderLista}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.situacaoETotal}>
          <View style={styles.informacoesDaCompra}>
            <Text style={styles.texto}>Total:</Text>
            <Text style={styles.texto}>
              R$ {this.calcularTotalDoCarrinho()}
            </Text>
          </View>
          <View style={styles.submeterCompra}>
            <TouchableOpacity
              onPress={() => {
                console.log("clicou");
              }}
              color="#23395B"
            >
              <View style={styles.botaoSubmeterCompra}>
                <Text style={styles.textoBotao}>Finalizar compra</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

function mapDispatchToProps(dispatch) {
  return {
    addCart: (id) => dispatch({ type: "ADD_CART", data: id }),
    removeCart: (id) => dispatch({ type: "REMOVE_CART", data: id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);
