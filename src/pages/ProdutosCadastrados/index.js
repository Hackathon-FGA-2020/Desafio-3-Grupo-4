import React, { Component } from 'react';
import { Text, View, Button, TextInput,TouchableOpacity,Alert,Image, FlatList, StyleSheet} from 'react-native';
import { styles } from './styles';


export default class Inicial extends Component {

  state = {
    data: [
      {id:'1', title: 'banana'},
      {id:'2', title: 'arroz'},
      {id:'3', title: 'abacaxi'},
      {id:'4', title: 'tomate'},
      {id:'5', title: 'cenoura'},
      {id:'6', title: 'trigo'},
      {id:'7', title: 'feijao'},
      {id:'8', title: 'milho'},
    ]
  };

  clicou = () => {
    Alert.alert("Tela cadastrar produtos","Tela cadastrar produtos");
  }

  deleteItemById = (id) => {
    const filteredData = this.state.data.filter(item => item.id !== id);
    this.setState({ data: filteredData });
  }

  button(item) {
    Alert.alert(
      'AVISO',
      'Você realmente deseja remover este produto ?',
      [
        {text: 'Não'},
        {text: 'Sim', onPress: () => {this.removerProduto();this.deleteItemById(item.id)}},
      ]
    );
  }

  removerProduto = () =>{
    Alert.alert("Produto removido!");
  }

  Item = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity onPress={() => this.button(item)}>
        <View style={styles.botaoRemover}>
          <Image style={styles.fotoBotaoRemover}
          source={require('./img/sinal-menos.png')}
          />
        </View>
        <Text></Text>
        </TouchableOpacity> 
      </View>
    );
  }

  render () {

    return (
      <View style={styles.container}>

      <Text style = {styles.textoBotao}>Adicionar produto</Text>  
        <TouchableOpacity onPress={() => {this.clicou() }}>
          <View style= {styles.botao}>
            <Image style = {styles.fotoBotao}
            source={require('./img/sinais.png')}
            />
          </View>
        </TouchableOpacity>
        <FlatList
          data={this.state.data}
          keyExtractor={(item) => item.id}  
          renderItem={this.Item}
          showsVerticalScrollIndicator={false}
        />
         
      </View>
      
    );
  }

}