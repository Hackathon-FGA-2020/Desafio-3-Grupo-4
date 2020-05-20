import { StyleSheet, Text, KeyboardAvoidingView, Image, View, FlatList, TouchableOpacity } from 'react-native';


export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#8dd7cf',
    },
    Titulo: {
        alignItems: 'center',
        marginTop: '15%',
    },
    containerLista: {
        position: 'absolute',
        backgroundColor: 'white',
        marginTop: '30%',
        width: '100%',
        height: '110%',
    },
    info:{
        marginTop: 24,
        padding: 50,
        backgroundColor: '#836FFF',
        flexDirection: 'column',
        marginBottom: 8
    },
    precoTotal: {
        fontWeight: 'bold',
        marginTop: '15%',
        textAlign: 'auto',
        marginLeft: '5%',
        fontSize: 35,
    },
    situacao: {
        fontWeight: 'bold',
        marginTop: '15%',
        textAlign: 'left',
        marginLeft: '5%',
        color: 'red',
        fontSize: 20,
    },
    vendedor: {
        fontWeight: 'bold',
        marginTop: '15%',
        textAlign: 'left',
        marginLeft: '5%',
    },
    produtos:{
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: '15%',
        marginLeft: '5%',
        
    },
    dataDoPedido: {
        fontWeight: 'bold',
        marginTop: '15%',
        textAlign: 'left',
        marginLeft: '5%',
        
    }

});