import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

const pedidoFeito = [
  {
    produtos: "Alface",
    precoTotal: 20.0,
    vendedor: "Joel",
    dataDaCompra: "14/02/2020",
    id: "1",
    situacao: "Pendente",
  },
  {
    produtos: "Cenoura",
    precoTotal: 10.0,
    vendedor: "Ana",
    dataDaCompra: "14/02/2020",
    id: "2",
    situacao: "Pendente",
  },
  {
    produtos: "Cenoura",
    precoTotal: 10.0,
    vendedor: "Ana",
    dataDaCompra: "14/02/2020",
    id: "3",
    situacao: "Pendente",
  },
  {
    produtos: "Cenoura",
    precoTotal: 10.0,
    vendedor: "Ana",
    dataDaCompra: "14/02/2020",
    id: "4",
    situacao: "Pendente",
  },
  {
    produtos: "Cenoura",
    precoTotal: 10.0,
    vendedor: "Ana",
    dataDaCompra: "14/02/2020",
    id: "5",
    situacao: "Pendente",
  },
];
export default class DetalhesPedidoFeito extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.cabecalho}>
          <Text style={styles.titulo}>Pedido feito</Text>
        </View>
        <View style={styles.lista}>
          <FlatList
            data={pedidoFeito}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <Text style={styles.texto}>{item.situacao}</Text>
                <Text style={styles.texto}>
                  Data do pedido: {item.dataDaCompra}
                </Text>
                <Text style={styles.texto}>Vendedor(a): {item.vendedor}</Text>
                <Text style = {styles.texto}>Produto(s):</Text>
                <Text style = {styles.produtos}>- {item.produtos}(xqtd)....... R$ {item.precoTotal}</Text>
                <Text style={styles.texto}>Preço total: R$ {item.precoTotal}</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}
