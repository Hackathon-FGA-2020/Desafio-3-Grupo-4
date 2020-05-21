import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Image, View, FlatList, TouchableOpacity } from 'react-native';
import {styles} from './styles';


export default class DetalhesCompra extends React.Component{
    render (){
        return(
            <View style={styles.background}>
                <View style = {styles.cabecalho}>
                    <Text style = {styles.titulo}>Pedido recebido</Text>
                </View>
                <View style = {styles.container}>
                    <Text style = {styles.texto}>{this.props.route.params.compra.situacao}</Text>
                    <Text style = {styles.texto}>Data do pedido: {this.props.route.params.compra.dataDaCompra}</Text>
                    <Text style = {styles.texto}>Comprador(a): {this.props.route.params.compra.comprador}</Text>
                    <Text style = {styles.texto}>Produto(s):</Text>
                    <Text style = {styles.produtos}>- {this.props.route.params.compra.produtos}(xqtd)....... R$ {this.props.route.params.compra.precoTotal}</Text>
                    <Text style = {styles.texto}>Preço total: R$ {this.props.route.params.compra.precoTotal}</Text>
                </View>
            </View>
        );
    }


}