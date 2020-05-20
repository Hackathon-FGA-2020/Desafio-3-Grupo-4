
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
    containerBotoes: {
      backgroundColor: '#8dd7cf',
      marginTop: '25%',
      width: '80%',
      height: '20%',
      justifyContent: 'space-evenly',
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
    infoPedidoRecebido: {
      marginTop: 24,
      padding: 40,
      backgroundColor: '#8dd7cf',
    },
    infoPedidoFeito: {
      marginTop: 24,
      padding: 40,
      backgroundColor: '#836FFF',
    }
  });