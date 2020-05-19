import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8DD7CF",
  },
  busca: {
    flex: 1,
  },
  campoDeBusca: {
    height: 50,
    marginHorizontal: 10,
    marginTop: 10,
    textAlign: "center",
    height: 50,
    borderWidth: 2,
    borderColor: "#71AFA7",
    borderRadius: 20,
    backgroundColor: "white",
  },
  listagem: {
    flex: 8,
  },
  escolhaDaBusca: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    fontSize: 18,
    color: "#293845",
    justifyContent: "space-evenly",
  },
  botoes: {
    alignItems: "center",
    color: "green",
  },
  itensListados: {
    flex: 8,
  },
  linhaDaColunaDasCategorias: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  objeto: {
    height: 110,
    width: 110,
    alignItems: "center",
    borderColor: "#71AFA7",
    borderRadius: 20,
    marginBottom: 20,
    padding: 3,
    backgroundColor: "white",
  },
  fotoObjeto: {
    width: 80,
    height: 80,
  },
  nomeObjeto: {
    paddingTop: 4,
    textAlignVertical: "bottom",
  },
});
