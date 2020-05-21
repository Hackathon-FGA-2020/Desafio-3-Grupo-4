import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#2194BF',
        justifyContent:'center',
    },
    adicionarProduto: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
        marginHorizontal: 20,
        borderWidth: 2,
        borderRadius: 7,
        borderColor: "#161925",
        paddingHorizontal: 10,
        backgroundColor: "white",
    },
    tituloBotao: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    textoBotao: {
        fontSize: 30,
        color: "#161925",
    },
    fotoBotao: {
        width: 35,
        height: 35,
    },
    lista: {
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
        paddingVertical: 20,
    },
    titulo: {
        fontSize: 28,
        color: "#293845",
    },
    nomeProduto: {
        flex: 6,
        paddingLeft: 20,
        alignItems: "center", 
    },
    botaoRemover: {
        flex:1,
        alignItems: "center", 
        justifyContent: "center", 
    },
    fotoBotaoRemover: {
        width: 30,
        height: 30,
    },

});