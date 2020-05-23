import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import Rating from "./rating";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const dados = [];

export default class PerfilPublico extends React.Component {
  state = {
    dados: [
      {
        id: "1",
        nome: "Alface americana",
        preco: "R$ 1.99",
        local: "Aguas Lindas - DF",
      },
      {
        id: "2",
        nome: "Alface lisa",
        preco: "R$ 1.95",
        local: "Brazlandia - DF",
      },
      {
        id: "3",
        nome: "Tomate cereja",
        preco: "R$ 1.90",
        local: "Samambaia - DF",
      },
      {
        id: "4",
        nome: "Cenoura",
        preco: "R$ 1.97",
        local: "Aguas Claras - DF",
      },
      {
        id: "5",
        nome: "Abacate",
        preco: "R$ 1.92",
        local: "Taguatinga - DF",
      },
      {
        id: "6",
        nome: "Rucula",
        preco: "R$ 1.91",
        local: "Ceilandia - DF",
      },
    ],
  };

  renderDados = ({ item }) => (
    <View>
      <TouchableOpacity style={styles.produtos} onPress={() => null}>
        <View style={styles.prodEsquerda}>
          <Image style={styles.imgProduto} source={require("./icone.png")} />
        </View>

        <View style={styles.prodDireita}>
          <Text>{item.nome}</Text>
          <Text style={{ fontSize: 22 }}>{item.preco}</Text>
          <Text>{item.local}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.informacoes}>
          <View style={styles.esq}>
            <Image style={styles.img} source={require("./usuario.png")} />
            <Text style={styles.nome}>Andre Gouvea Maciel</Text>
            <Text style={styles.nome}>Brasilia-DF</Text>
          </View>

          <View style={styles.dir}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  cor: !this.state.cor,
                });
              }}
            >
              <FontAwesome
                name={this.state.cor === true ? "star" : "star-o"}
                color={this.state.cor === true ? "#836FFF" : "lightgrey"}
                size={28}
                style={{
                  marginTop: 15,
                }}
              />
            </TouchableOpacity>
            <Text style={styles.nome}>100 produtos vendidos</Text>
            <Rating />
            <Text style={styles.nome}>53 avaliações</Text>
          </View>
        </View>
        <View style={styles.telaProdutos}>
          <FlatList
            style={{ width: "90%" }}
            data={this.state.dados}
            keyExtractor={(item) => item.id}
            renderItem={this.renderDados}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}
