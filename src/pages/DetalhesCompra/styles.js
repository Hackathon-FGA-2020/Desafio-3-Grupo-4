
import { StyleSheet, Text, KeyboardAvoidingView, Image, View, FlatList, TouchableOpacity } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex : 1,
        backgroundColor: '#8dd7cf',
    },
    titulo: {
        alignItems: 'center',
        marginTop: '15%',
    },
    container: {
       backgroundColor: '#3cb371',
       marginTop: '30%',
       width: '100%',
       height: '90%', 
       position: 'absolute'
    },
    nomeProduto: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: '15%',
        marginLeft: '5%'
    },
    dataPedido: {
        fontWeight: 'bold',
        marginTop: '15%',
        textAlign: 'left',
        marginLeft: '5%'
    },
    comprador: {
        fontWeight: 'bold',
        marginTop: '15%',
        textAlign: 'left',
        marginLeft: '5%'
    },
    precoTotal: {
        fontWeight: 'bold',
        marginTop: '15%',
        textAlign: 'left',
        marginLeft: '5%',
        fontSize: 35
    },
    situacao: {
        fontWeight: 'bold',
        marginTop: '15%',
        textAlign: 'left',
        marginLeft: '5%',
        color: 'red',
        fontSize: 20
    }
});