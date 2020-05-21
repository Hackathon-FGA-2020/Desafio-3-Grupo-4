import React, { Component } from "react";
import { Text, View, TouchableOpacity, Modal, TextInput } from "react-native";

import { styles } from "./styles";

export default class Produto extends Component {
  state = {
    showPopUp: false,
    produto: [
      { qtd: 1 },
    ],

  };

  calcularTotalDoCarrinho = () =>
    this.state.DATAcarrinho.reduce(
      (total, valor) => total + valor.preco,
      0
    ).toFixed(2);

  renderQtd() {

  }

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
                <TextInput
                  keyboardType={'numeric'}
                  placeholder="Qtd desejada"
                  maxLength={5}
                  value={this.state.qtd}
                  onChangeText={text => { this.setState({ qtd: text }) }}
                  style={styles.inputqtd}
                />
              </View>
            </View>

          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{product.description}</Text>
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
