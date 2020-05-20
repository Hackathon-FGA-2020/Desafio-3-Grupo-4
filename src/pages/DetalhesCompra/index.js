import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Image, View, FlatList, TouchableOpacity } from 'react-native';
import {styles} from './styles';


export default class DetalhesCompra extends React.Component{
    render (){
        return(
            <View style={styles.background}>
                <View style = {styles.titulo}>
                    <Text style = {{fontWeight: 'bold'}}>PEDIDO RECEBIDO</Text>
                </View>
                <View style = {styles.container}>
                    <Text style = {styles.situacao}>{this.props.route.params.compra.situacao}</Text>
                    <Text style = {styles.dataPedido}>Data do pedido: {this.props.route.params.compra.dataDaCompra}</Text>
                    <Text style = {styles.comprador}>Comprador(a): {this.props.route.params.compra.comprador}</Text>
                    <Text style = {styles.nomeProduto}>Produto(s): {"\n"} {"\t"}{"\t"}{"\t"}-{"\t"}{this.props.route.params.compra.produtos}{"\t"}(xqtd)....... R$ {this.props.route.params.compra.precoTotal}</Text>
                    <Text style = {styles.precoTotal}>Preço total: R$ {this.props.route.params.compra.precoTotal}</Text>
                </View>
            </View>
        );
    }


}