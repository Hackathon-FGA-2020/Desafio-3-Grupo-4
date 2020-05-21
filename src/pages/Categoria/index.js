import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Picker } from "@react-native-community/picker";

import { styles } from "./styles";

import { getCollectionWithQuery } from "../../api";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
  "Etiam eget ante elementum, feugiat massa at, dignissim urna. " +
  "Sed suscipit nibh ac nisl molestie facilisis. " +
  "Fusce bibendum sem in velit finibus vestibulum. " +
  "Phasellus in quam nec mauris auctor finibus in nec ligula.";

const seller = "Nivaldo Pereira";
const local = "Samambaia";
const state = "DF";

export default class Categoria extends Component {
  state = {
    pickerSelect: null,
    sortedProducts: null,
    products: null,
  };

  setProducts(data) {
    let result = [];
    data.forEach((item) => {
      result.push({
        id: item.id,
        title: item.data.title,
        price: item.data.price,
        local: local,
        state: state,
        seller: seller,
        description: lorem,
      });
    });
    return result;
  }

  async componentDidMount() {
    let query = {
      field: "category",
      operator: "==",
      value: this.props.route.params.categoryId,
    };
    this.setState({
      products: this.setProducts(
        await getCollectionWithQuery("products", query)
      ),
    });
  }
  renderProduct = ({ item }) => (
    <TouchableWithoutFeedback
      onPress={() =>
        this.props.navigation.navigate("Produto", { product: item })
      }
    >
      <View style={styles.productContainer}>
        <View style={styles.productImage}>
          <Text> Image </Text>
        </View>
        <View style={styles.productTextBox}>
          <Text style={styles.titleProduct}>{item.title}</Text>
          <Text style={styles.localProduct}>
            {item.local} - {item.state}
          </Text>
          <Text style={styles.priceProduct}>R$ {item.price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.categoryImage}>
            <Text> Image </Text>
          </View>
          <Text style={styles.titleCategory}>
            {this.props.route.params.categoryTitle}
          </Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={this.state.pickerSelect}
              style={{ height: 40 }}
              onValueChange={(itemValue, itemIndex) => {
                if (itemValue == "bigger") {
                  this.setState({
                    sortedProducts: [...this.state.products].sort(
                      (a, b) => a.price < b.price
                    ),
                  });
                } else if (itemValue == "lower") {
                  this.setState({
                    sortedProducts: [...this.state.products].sort(
                      (a, b) => a.price > b.price
                    ),
                  });
                }
                this.setState({ pickerSelect: itemValue });
              }}
              mode="dropdown"
            >
              <Picker.Item label="Ordenar Por..." value={null} />
              <Picker.Item label="Maior Preço" value="bigger" />
              <Picker.Item label="Menor Preço" value="lower" />
            </Picker>
          </View>
        </View>
        <FlatList
          data={
            this.state.pickerSelect == null
              ? this.state.products
              : this.state.sortedProducts
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          keyExtractor={(item) => item.id}
          renderItem={this.renderProduct}
        />
      </View>
    );
  }
}
