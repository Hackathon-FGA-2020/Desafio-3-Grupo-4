import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

const produtos = [
  {
    id: '0',
    nome: 'cenoura',
  },
  {
    id: '1',
    nome: 'cenoura roxa',
  },
  {
    id: 2,
    nome: 'cenoura verde',
  }
];

export default class Categoria extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text> Tela da Categoria Específica</Text>
      </View>
    );
  }

}