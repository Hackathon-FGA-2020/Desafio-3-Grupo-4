import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2194BF",
  },
  opcoes: {
    flex: 0.8,
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingHorizontal: 25,
  },
  carrinhoBusca: {
    flexDirection: "row",
  },
  botaoPerfil: {
    width: 50,
    height: 50,
  },
  botaoCarrinho: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  botaoPesquisa: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  titulo: {
    paddingLeft: 10,
    paddingBottom: 8,
    fontSize: 30,
    color: "#161925",
  },
  vendedores: {
    flex: 2,
  },
  categorias: {
    flex: 6,
    justifyContent: "flex-start",
  },
  listaVendedores: {
    alignItems: "center",
    justifyContent: "center",
  },
  perfil: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    marginHorizontal: 1,
  },
  fotoVendedor: {
    width: 70,
    height: 70,
  },
  listaCategorias: {
    paddingTop: 10,
    flex: 1,
  },
  linhaDaColunadasCategorias: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  nome: {
    color: "#161925",
  },
  categoria: {
    height: 110,
    width: 110,
    borderColor: "#71AFA7",
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
    padding: 3,
    backgroundColor: "white",
  },
  fotoCategoria: {
    width: 80,
    height: 80,
  },
  nomeCategoria: {
    paddingTop: 4,
    color: "#161925",
    textAlignVertical: "bottom",
  },
});
