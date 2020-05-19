import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, KeyboardAvoidingView, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';


const compras = [
    {produtos: 'Alface', precoTotal: 20.00 , comprador: 'Joel', dataDaCompra: '14/02/2020', id: '1',situacao: 'Pendente'},
    {produtos: 'Cenoura', precoTotal: 10.00 , comprador: 'Ana', dataDaCompra: '14/02/2020', id: '2', situacao: 'Pendente'},
    {produtos: 'Tomate', precoTotal: 15.50 , comprador: 'Gabriel', dataDaCompra: '14/02/2020', id: '3',situacao: 'Pendente'},
    {produtos: 'Batata', precoTotal: 16.40 , comprador: 'Felipe', dataDaCompra: '14/02/2020', id: '4', situacao: 'Pendente'},
    {produtos: 'Banana', precoTotal: 11.00 , comprador: 'Jose', dataDaCompra: '14/02/2020', id: '5',situacao: 'Pendente'},
    {produtos: 'Manga', precoTotal: 8.50 , comprador: 'Gabriela', dataDaCompra: '14/02/2020', id: '6',situacao: 'Pendente'},
    {produtos: 'Laranja', precoTotal: 20.00 , comprador: 'Joao', dataDaCompra: '14/02/2020', id: '7',situacao: 'Pendente'}
];
export default class comprasEfetuadasIndex extends React.Component {
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
            <View>
              <Text style = {{fontWeight: 'bold'}}>{"\n"}Todos</Text>
              <RadioButton value="third"  color = 'black'/>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.containerLista}>
          <FlatList
            data = {compras}
            renderItem = {({ item }) => (
              <TouchableOpacity onPress = {() => this.props.navigation.navigate("detalhesCompra", {compra : item})}>
                <Text style = {styles.info}> 
                  Produto(s): {item.produtos}             Preço: R$ {item.precoTotal}{"\n"}{"\n"} 
                  Comprador(a): {item.comprador}{"\n"}{"\n"}                              {item.dataDaCompra}
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




const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#8dd7cf',
  },
  Titulo: {
    alignItems: 'center',
    marginTop: '15%',
  },
  containerBotoes: {
    backgroundColor: '#8dd7cf',
    marginTop: '25%',
    width: '80%',
    height: '20%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute'
  },
  containerLista:{
    position: 'absolute',
    backgroundColor: 'white',
    marginTop: '50%',
    width: '100%',
    height: '110%',
    alignSelf: 'center'

  },
  info: {
    marginTop: 24,
    padding: 40,
    backgroundColor: '#8dd7cf',
  },
});