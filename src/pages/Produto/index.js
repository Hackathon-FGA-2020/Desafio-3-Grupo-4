import React, { Component } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export default class Produto extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.categoryImage}>
            <Text> Image </Text>
          </View>
        </View>
      </View>
    );
  }
}
