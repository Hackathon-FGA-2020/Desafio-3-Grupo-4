import React, { Component } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";

import { styles } from "./styles";

export default class Produto extends Component {
  render() {
    const { product } = this.props.route.params;
    return (
      <View style={styles.container}>
        <View style={styles.productContainer}>
          <View style={styles.productImage}>
            <Text> Image </Text>
          </View>
          <View style={styles.productDataContainer}>
            <View style={styles.dataContainer}>
              <View>
                <Text style={styles.titleProduct}>{product.title}</Text>
                <Text style={styles.localProduct}>
                  {product.local} - {product.state}
                </Text>
                <Text style={styles.sellerProduct}>{product.seller}</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.priceProduct}>
                  R$ {product.price.toFixed(2)}
                </Text>
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>{product.description}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonBag}
          activeOpacity={0.6}
          onPress={() => console.log("helo")}
        >
          <Text style={{ color: "white" }}>Adicionar à cesta</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
