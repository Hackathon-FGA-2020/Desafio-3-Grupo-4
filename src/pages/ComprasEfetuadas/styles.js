
import { StyleSheet, Text, KeyboardAvoidingView, Image, View, FlatList, TouchableOpacity } from 'react-native';

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#2194BF',
    },
    Titulo: {
      alignItems: 'center',
      marginTop: 20,
    },
    containerBotoes: {
      marginVertical: 10,
      flexDirection: "row",
      // alignItems: "center",
      fontSize: 18,
      color: "#293845",
      justifyContent: "space-evenly",
    },
    botoes: {
      alignItems: "center",
      flexDirection: "column",
    },
    textoBotao: {
      fontSize: 15,
      alignSelf: "center",
    },
    containerLista:{
      flex: 6,
      marginHorizontal: 20,
    },
    item: {
      flex: 1,
      marginVertical: 10,
      flexDirection: "row",
      borderWidth: 2,
      borderRadius: 7,
      borderColor: "#161925",
      backgroundColor: "white",
      flexDirection: "column",
      paddingVertical: 10,
    },
    produtoComprador: {
      marginLeft: 10,
      flexDirection: "column",
      alignItems: "center",
    }, 
    dados: {
      flex: 2,
      paddingVertical: 10,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    texto: {
      fontSize: 16,
      color: "#161925",
    },
    campoPreco: {
      marginLeft: 10,
      alignItems: "center",
    }, 
    dataSituacao: {
      marginLeft: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      alignItems: "center",
    },  
  });