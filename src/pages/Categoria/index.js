import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Picker } from "@react-native-community/picker";

import { styles } from "./styles";

import { getCollectionWithQuery, getDocument } from "../../api";

export default class Categoria extends Component {
  state = {
    categoryTitle: null,
    pickerSelect: null,
    sortedProducts: null,
    products: null,
  };

  async componentDidMount() {
    this.setState({
      products: await this.getProducts(),
      categoryTitle: await this.getCategoryTitle(),
    });
  }

  async getCategoryTitle() {
    let category = await getDocument(
      "categories",
      this.props.route.params.categoryId
    );
    return category.data.title;
  }

  async getProducts() {
    let list = [];
    let query = {
      field: "categoryId",
      operator: "==",
      value: this.props.route.params.categoryId,
    };
    let products = await getCollectionWithQuery("products", query);
    for (const item of products) {
      let obj = {};
      obj.id = item.id;
      obj.title = item.data.title;
      obj.price = item.data.price;
      obj.img = item.data.img;
      let user = await getDocument("users", item.data.sellerId);
      obj.city = user.data.city;
      obj.state = user.data.state;
      list.push(obj);
    }
    return list;
  }

  renderProduct = ({ item }) => (
    <TouchableWithoutFeedback
      onPress={() =>
        this.props.navigation.navigate("Produto", { productId: item.id })
      }
    >
      <View style={styles.productContainer}>
        <View style={styles.productImage}>
          <Text> Image </Text>
        </View>
        <View style={styles.productTextBox}>
          <Text style={styles.titleProduct}>{item.title}</Text>
          <Text style={styles.localProduct}>
            {item.city} - {item.state}
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
          <Text style={styles.titleCategory}>{this.state.categoryTitle}</Text>
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
