import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
} from "react-native";
import { styles } from "./styles";

export default class ProdutosCadastrados extends Component {

  state = {
    data: [
      { id: "1", title: "banana" },
      { id: "2", title: "arroz" },
      { id: "3", title: "abacaxi" },
      { id: "4", title: "tomate" },
      { id: "5", title: "cenoura" },
      { id: "6", title: "trigo" },
      { id: "7", title: "feijao" },
      { id: "8", title: "milho" },
    ],
  };

  deleteItemById = (id) => {
    const filteredData = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: filteredData });
  };

  button = (item) => {
    console.log(item);
    Alert.alert("AVISO", "Você realmente deseja remover este produto ?", [
      { text: "Não" },
      { text: "Sim", onPress: () => { this.deleteItemById(item.id), this.removerProduto() } },
    ]);
  };

  removerProduto = () => {
    Alert.alert("Produto removido!");
  };

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.nomeProduto}>
        <Text style={styles.titulo}>{item.title}</Text>
      </View>
      <View style={styles.botaoRemover}>
        <TouchableOpacity onPress={() => this.button(item)}>
          <Image
            style={styles.fotoBotaoRemover}
            source={require("./img/sinal-menos.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tituloBotao}>
          <Text style={styles.textoBotao}>Adicionar produto</Text>
        </View>

        <TouchableOpacity
          style={styles.adicionarProduto}
          onPress={() => {
            this.props.navigation.navigate("AdicionarProduto")
          }}
        >
          <View>
            <Image
              style={styles.fotoBotao}
              source={require("./img/sinais.png")}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.lista}>
          <FlatList
            data={this.state.data}
            keyExtractor={(item) => item.id}
            renderItem={this.renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}
