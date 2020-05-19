import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

const categorias = [
  {
    id: '0',
    nome: 'cenoura',
  },
  {
    id: '1',
    nome: 'banana',
  },
];

export default class ProdutosCadastrados extends Component {


  render () {
    return (
      <View style={styles.container}>
        <Text> Tela das Categorias</Text>
      </View>
    );
  }

}