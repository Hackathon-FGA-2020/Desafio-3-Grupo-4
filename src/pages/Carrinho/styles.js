import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#8dd7cf"
    },
    tituloSituacao: {
        flex: 1,
        // backgroundColor: "green",
    },
    titulo: {
        padding: 20,
        fontSize: 30,
        color: "#293845",
    },
    produtosNoCarrinho: {
        flex: 5,
        alignItems: "center",
    },
    informacoesDoProduto: {
        width:300,
        height:100,
        backgroundColor: "white",
        borderRadius: 20,
        margin: 10,
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
    situacaoETotal: {
        flex: 2,
        flexDirection: "column",
    },
    informacoesDaCompra: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "space-around",
    },
    texto: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#293845",
    },
    submeterCompra: {
        flex: 1,
        padding: 14,
        justifyContent: "center",
    },

});