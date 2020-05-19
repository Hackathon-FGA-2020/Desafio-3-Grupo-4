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

export default class Categorias extends Component {

  renderItem = ({item}) => (

    <View style={styles.item}>
      <Text>{item.nome}</Text>
    </View>

  );

  render () {
    return (
      <View style={styles.container}>
        <Text> Tela das Categorias</Text>
      </View>
    );
  }

}