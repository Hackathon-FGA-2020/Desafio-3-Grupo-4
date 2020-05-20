import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, KeyboardAvoidingView, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import {styles} from './styles';

const compras = [
    {produtos: 'Alface', precoTotal: 20.00 , comprador: 'Joel', dataDaCompra: '14/02/2020', id: '1',situacao: 'Pendente'},
    {produtos: 'Cenoura', precoTotal: 10.00 , comprador: 'Ana', dataDaCompra: '14/02/2020', id: '2', situacao: 'Pendente'},
    {produtos: 'Tomate', precoTotal: 15.50 , comprador: 'Gabriel', dataDaCompra: '14/02/2020', id: '3',situacao: 'Pendente'},
    {produtos: 'Batata', precoTotal: 16.40 , comprador: 'Felipe', dataDaCompra: '14/02/2020', id: '4', situacao: 'Pendente'},
    {produtos: 'Banana', precoTotal: 11.00 , comprador: 'Jose', dataDaCompra: '14/02/2020', id: '5',situacao: 'Pendente'},
    {produtos: 'Manga', precoTotal: 8.50 , comprador: 'Gabriela', dataDaCompra: '14/02/2020', id: '6',situacao: 'Pendente'},
    {produtos: 'Laranja', precoTotal: 20.00 , comprador: 'Joao', dataDaCompra: '14/02/2020', id: '7',situacao: 'Pendente'}
];

const pedidoFeito = [
  { produtos: 'Alface', precoTotal: 20.00, vendedor: 'Joel', dataDaCompra: '14/02/2020', id: '1', situacao: 'Pendente' },
  { produtos: 'Cenoura', precoTotal: 10.00, vendedor: 'Ana', dataDaCompra: '14/02/2020', id: '2', situacao: 'Pendente' }
];

export default class ComprasEfetuadas extends React.Component {
  state = {
    value: 'first',
  };
  render() {
    return (
      <View style={styles.background}>

        <View style={styles.Titulo}>
          <Text style={{ fontSize: 30 }, { fontWeight: 'bold' }}>COMPRAS</Text>
        </View>
        <View style={styles.containerBotoes}>
          <RadioButton.Group
            onValueChange={value => this.setState({ value })}
            value={this.state.value}
          >
            <View>
              <Text style = {{fontWeight: 'bold'}}>Pedidos {"\n"}recebidos</Text>
              <RadioButton value="first" color = 'black' />
            </View>
            <View>
              <Text style = {{fontWeight: 'bold'}}>Pedidos {"\n"}feitos</Text>
              <RadioButton value="second"  color = 'black'/>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.containerLista}>
          <FlatList
            data = {this.state.value === 'first'
              ? compras
              : pedidoFeito}
            renderItem = {({ item }) => (
              <TouchableOpacity 
                onPress = {this.state.value === 'first' ?
                  () => this.props.navigation.navigate("DetalhesCompra", {compra : item}) : 
                  () => this.props.navigation.navigate("DetalhesPedidoFeito", {compra : item})}>
                  <Text style = {this.state.value === 'first' ? styles.infoPedidoRecebido : styles.infoPedidoFeito}> 
                    Produto(s): {item.produtos}             Preço: R$ {item.precoTotal}{"\n"}{"\n"} 
                    {this.state.value === 'first' ? 'Comprador(a):' : 'Vendedor(a):'} {this.state.value === 'first' ? item.comprador : item.vendedor}{"\n"}{"\n"}                              {item.dataDaCompra}
                    <Text style = {{color: 'red'}}>{"\t"}{"\t"}{"\t"}{"\t"}{item.situacao}</Text>                           
                  </Text>
                
              </TouchableOpacity>

            )}
          
          />

        </View>
      </View>
    );
  }
}