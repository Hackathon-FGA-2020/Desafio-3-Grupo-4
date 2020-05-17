import React, { Component } from 'react';
import { Text, View, Button} from 'react-native';
import { styles } from './styles';

export default class Carrinho extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text> Commit Inicial </Text>
        <Button title="Categorias" onPress={() => this.props.navigation.navigate("Categorias")}></Button>
      </View>
    );
  }

}