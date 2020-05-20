import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, KeyboardAvoidingView, Image, View, FlatList, TouchableOpacity } from 'react-native';
import {styles} from './pedidoFeitoStyle';

const pedidoFeito = [
    { produtos: 'Alface', precoTotal: 20.00, vendedor: 'Joel', dataDaCompra: '14/02/2020', id: '1', situacao: 'Pendente' },
    { produtos: 'Cenoura', precoTotal: 10.00, vendedor: 'Ana', dataDaCompra: '14/02/2020', id: '2', situacao: 'Pendente' }
];
export default class pedidoFeitoIndex extends React.Component {
    render() {
        return (
            <View style={styles.background}>
                <View style={styles.Titulo}>
                    <Text style={{ fontSize: 30 }, { fontWeight: 'bold' }}>PEDIDO FEITO</Text>
                </View>
                <View style={styles.containerLista}>
                    <FlatList
                        data={pedidoFeito}
                        renderItem={({ item }) => (
                            <View style={styles.info}>
                                <Text style={styles.situacao}>{item.situacao}</Text>
                                <Text style = {styles.dataDoPedido}>Data do pedido: {item.dataDaCompra}</Text>
                                <Text style = {styles.vendedor}>Vendedor(a): {item.vendedor}</Text>
                                <Text style = {styles.produtos}>Produto(s):{"\n"}{"\t"}{"\t"}{"\t"}-{"\t"}{item.produtos}(xqtd) ....... R$ {item.precoTotal}</Text>
                                <Text style = {styles.precoTotal}>Preço total: {item.precoTotal}</Text>
                            </View>
                        )}

                    />
                </View>
            </View>
        );
    }
}