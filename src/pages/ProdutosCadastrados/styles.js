import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8dd7cf',
        alignItems:'center',
        justifyContent:'center',
    },
    botao:{
        width: 325,
        height: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop:'5%',
    },
    fotoBotao:{
        width:50,
        height:50,
        marginTop:'1.5%',
    },
    item:{
        marginTop: '15%',
        padding : 15,
        backgroundColor: 'white',
        width:325,
        height:60,
        alignItems:'flex-end'
    },
    textoBotao:{
        fontSize:16,
        fontWeight: 'bold',
        textAlign:'center',
        marginTop:'15%'
    },
    title:{
        fontSize:20,
        textAlign:'center',
    },
    botaoRemover:{
        width: 35,
        height:35,
        borderRadius:100,
        marginTop: '-9.25%',
        alignItems:'flex-end',
        marginHorizontal:'-2%'
    },
    fotoBotaoRemover:{
        width:35,
        height:35,
    }
});