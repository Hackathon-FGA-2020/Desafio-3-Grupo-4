import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import { styles } from './styles';

export default class Inicial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Commit Inicial </Text>
        <Button title="Categoria" onPress={() => this.props.navigation.navigate("Categoria")}></Button>
        <Button title="Login" onPress={() => this.props.navigation.navigate("Login")}></Button>
      </View>
    );
  }
}
