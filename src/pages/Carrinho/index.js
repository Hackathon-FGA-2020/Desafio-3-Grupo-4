import React, { Component } from "react";
import { Text, View, StatusBar, Image, Alert } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

import { styles } from "./styles";

import { getDocument } from "../../api";

class Carrinho extends Component {
  state = {
    DATAcarrinho: [],
    // DATAcarrinho:
    //   {
    //     id: "0",
    //     nome: "Alface",
    //     proprietario: "Pedro",
    //     preco: 1.9,
    //   },
  };

  async componentDidMount() {
    this.setState({ DATAcarrinho: await this.getProdutcts() });
  }

  async getProdutcts() {
    let list = [];
    const { cart } = this.props;
    for (const item of cart) {
      let obj = {};
      let product = await getDocument("products", item);
      obj.id = product.id;
      obj.nome = product.data.title;
      obj.preco = product.data.price;
      let seller = await getDocument("users", product.data.sellerId);
      obj.proprietario = seller.data.name;
      list.push(obj);
    }
    return list;
  }

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
