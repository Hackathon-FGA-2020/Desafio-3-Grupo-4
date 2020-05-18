import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
    container:{
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#8dd7cf',
      padding: 20,
    },
    input: {
      height: 45,
      backgroundColor: '#FFF',
      alignSelf: 'stretch',
      borderColor: '#EEE',
      borderWidth: 1,
      paddingHorizontal: 20,
      marginBottom: 10,
      alignContent: 'space-between',
      borderRadius: 10,
    },
    button: {
      justifyContent: 'space-between', // arrumar expaçamento entre botões
      flexDirection: 'row',
      // alignItems: 'center',
    },
    buttonL: {
      backgroundColor: '#6558F5',
      height: 45,
      borderRadius: 10,
      paddingHorizontal: 20,
    },
    buttonR: {
      backgroundColor: '#6558F5',
      height: 45,
      borderRadius: 10,
      paddingHorizontal: 20,
    },
    buttonText: {
      color: '#FFF',
      fontWeight: 'bold',
      marginVertical: 12,
    },
    text: {
      alignSelf: 'flex-end',
      fontSize: 10,
      marginEnd: 10,
    },
    container_text: {
      marginVertical: 40,
      fontWeight: 'bold',
    },
    title: {
      alignSelf: 'center',
      fontSize: 50,
    },
    slogan: {
      alignSelf: 'center',
    },
    logo_image: {
      alignSelf: 'center',
    },
});














