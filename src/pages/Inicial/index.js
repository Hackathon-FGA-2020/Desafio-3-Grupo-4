<<<<<<< HEAD
import React, { Component } from "react";
import { Text, View, Button } from "react-native";
=======
import React, { Component } from 'react';
import { Text, View, Button} from 'react-native';

import { styles } from './styles';
>>>>>>> Tela_Login

import { styles } from "./styles";

export default class Inicial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Commit Inicial </Text>
<<<<<<< HEAD
        <Button
          title="Categoria Específica"
          onPress={() => this.props.navigation.navigate("Categoria")}
        />
=======
        <Button title="Categorias" onPress={() => this.props.navigation.navigate("Categorias")}></Button>
        <Button title="Login" onPress={() => this.props.navigation.navigate("Login")}></Button>
>>>>>>> Tela_Login
      </View>
    );
  }
}
