import React, { Component } from "react";
import { Text, View, TouchableOpacity, Modal } from "react-native";

import { styles } from "./styles";

import { getDocument } from "../../api";

export default class Produto extends Component {
  state = {
    showPopUp: false,
    product: null,
  };

  async componentDidMount() {
    this.setState({ product: await this.getProduct() });
  }

  async getProduct() {
    let obj = {};
    let product = await getDocument(
      "products",
      this.props.route.params.productId
    );
    obj.title = product.data.title;
    obj.price = product.data.price;
    obj.description = product.data.description;
    let user = await getDocument("users", product.data.sellerId);
    obj.sellerName = user.data.name;
    obj.city = user.data.city;
    obj.state = user.data.state;
    return obj;
  }

  render() {
    const { product } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.productContainer}>
          <View style={styles.productImage}>
            <Text> Image </Text>
          </View>
          <View style={styles.productDataContainer}>
            <View style={styles.dataContainer}>
              <View>
                <Text style={styles.titleProduct}>
                  {product ? product.title : null}
                </Text>
                <Text style={styles.localProduct}>
                  {product ? product.city + " - " + product.state : null}
                </Text>
                <Text style={styles.sellerProduct}>
                  {product ? product.sellerName : null}
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.priceProduct}>
                  {product ? "R$" + product.price.toFixed(2) : null}
                </Text>
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>
                {product ? product.description : null}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonBag}
          activeOpacity={0.6}
          onPress={() => this.setState({ showPopUp: true })}
        >
          <Text style={{ color: "#CBF7ED" }}>Adicionar à cesta</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.showPopUp}
          transparent={true}
          animationType="fade"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalPopUpBox}>
              <Text style={styles.modalPopUpText}>
                Item adicionado ao carrinho...
              </Text>
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.modalButton}
                  onPress={() => {
                    this.setState({ showPopUp: false }),
                      this.props.navigation.navigate("Inicial");
                  }}
                >
                  <Text style={styles.modalButtonText}>
                    Continuar comprando
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.modalButton}
                  onPress={() => {
                    this.setState({ showPopUp: false });
                    this.props.navigation.navigate("Carrinho");
                  }}
                >
                  <Text style={styles.modalButtonText}>Ir para a cesta</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
