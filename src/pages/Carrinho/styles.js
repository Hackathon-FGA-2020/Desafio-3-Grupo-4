import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#2194BF",
    },
    tituloSituacao: {
        flex: 1,
    },
    titulo: {
        padding: 20,
        fontSize: 30,
        color: "#161925",
    },
    produtosNoCarrinho: {
        flex: 5,
        // marginRight: 10,
    },
    informacoesDoProduto: {
        width:350,
        height:100,
        backgroundColor: "white",
        borderRadius: 20,
        marginHorizontal: 5,
        marginVertical: 10,
        justifyContent: "space-around",
        flexDirection: "row",
    },
    produto: {
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    nomeProduto: {
        fontSize: 24,
        color: "#293845",
    },
    nomeVendedor: {
        fontSize: 20,
        color: "#293845",
    },
    valor: {
        fontSize: 20,
        color: "#293845",
        alignItems: "flex-end",
        justifyContent: "space-around",
    },
    preco: {
        fontSize: 20,
        color: "#293845",
    },
    campoRemover: {
        // flex:0.1,
        alignItems: "center", 
        justifyContent: "center", 
    },
    fotoBotaoRemover: {
        width: 30,
        height: 30,
    },
    situacaoETotal: {
        flex: 2,
        borderColor: "#161925",
        borderWidth: 2,
        flexDirection: "column",
    },
    informacoesDaCompra: {
        flex: 2,
        flexDirection: "row",
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "space-around",
    },
    texto: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#CBF7ED",
    },
    submeterCompra: {
        flex: 2,
        justifyContent: "center",
    },
    botaoSubmeterCompra: {
        flex: 1,
        paddingVertical: 25,
        marginHorizontal: 10,
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#161925",
    },
    textoBotao: {
        fontSize: 20,
        color: "#CBF7ED",
    },

});