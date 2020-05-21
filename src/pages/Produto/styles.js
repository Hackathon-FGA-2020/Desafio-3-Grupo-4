import { StyleSheet } from 'react-native';

 export const styles = StyleSheet.create({
    background:{
      flex: 1,
      justifyContent: "center",
      alignItems:'stretch',
      backgroundColor: "#8dd7cf",
    },
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: "#8dd7cf",
    },

    button: {
      width: 150,
      height: 50,
      borderRadius: 3,
      backgroundColor: "#836FFF",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10
    },

    buttonText: {
      color: "#fff"
    },

    produto: {
      alignSelf: 'center',
      resizeMode: 'cover',
      width: 190,
      height: 190,
      marginVertical: '5%',
    },

    inputNum: {
      backgroundColor: '#FFF',
      height:'45%',
      width: '39%',
      marginBottom: 4,
      color: '#191919',
      fontSize: 17,
      padding: 5,
      marginBottom: '5%',
      marginRight: '1%',
    },

    inputqtd: {
      backgroundColor: '#FFF',
      height:'45%',
      width: '39%',
      marginBottom: 4,
      color: '#191919',
      fontSize: 17,
      padding: 5,
      marginBottom: '5%',
    },

    qtd: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

    comentario:{
      backgroundColor: '#FFF',
      height:'10%',
      width:'80%',
      marginBottom: 4,
      color: '#191919',
      fontSize: 17,
      padding: 5,
      marginBottom: '5%',
    },
    
    input:{
        backgroundColor: '#FFF',
        width:'80%',
        height:'5%',
        marginBottom: 4,
        color: '#191919',
        fontSize: 17,
        padding: 5,
        marginBottom: '5%',
        
    },

    dropdown:{
      backgroundColor: '#FFFFFF',
      width:'80%',
      color: '#191919',
      fontSize: 17,
      padding: 5,
      marginBottom: '5%',
      marginTop:50,
    },
    text:{
      fontSize:15,
      alignItems:'flex-start',
      alignContent:'flex-start',

    }
});