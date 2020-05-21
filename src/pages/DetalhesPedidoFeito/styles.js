
import { StyleSheet, Text, KeyboardAvoidingView, Image, View, FlatList, TouchableOpacity } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#2194BF',
    },
    cabecalho: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    titulo: {
        alignItems: 'center',
        justifyContent: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "#161925",
    },
    lista: {
        flex: 8,
    },
    container: {
        backgroundColor: '#CBF7ED',
        borderRadius: 2,
        borderWidth: 5,
        borderColor: "#161925",
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 15,
    },
    texto: {
        fontSize: 20,
        color: "#161925",
        paddingVertical: 10,
    },
    produtos: {
        fontSize: 18,
        color: "#161925",
        paddingLeft: 30,
    },

});