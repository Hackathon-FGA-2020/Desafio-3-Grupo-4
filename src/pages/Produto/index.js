import React, { Component } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export default class Produto extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Tela de produto </Text>
      </View>
    );
  }
}
