import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  background:
  {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#01BAEF",
    justifyContent: 'center',
  },

  informacoes:
  {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "red",
    borderColor: "#161925",
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },

  telaOpcoes:
  {
    width: '100%',
    backgroundColor: "#2194BF",
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botoes:
  {
    backgroundColor: '#23395B',
    width: '90%',
    height: '20%',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#161925',
  },

  textoBotoes: {
    fontSize: 20,
    color: "#CBF7ED"
  },

  btnEditar:
  {
    direction: 'rtl',
    backgroundColor: '#2194BF',
    // color="#23395B",
    width: '50%',
    height: '20%',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#161925',
    marginTop: '10%',

  },

  nome:
  {
    marginVertical: 10,
    fontSize: 16,
    color: "#CBF7ED",
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtEditar:
  {
    color: '#CBF7ED',
  },

  img:
  {
    resizeMode: 'cover',
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  esq:
  {
    height: '100%',
    flex: 1,
    paddingTop: 15,
    alignItems: "center",
    backgroundColor: '#23395B',

  },

  dir:
  {
    flex: 1,
    backgroundColor: '#23395B',
    height: '100%',
    alignItems: 'center',
    justifyContent: "space-evenly",
  },

  txtVendidos:
  {
    flex: 0,
  },

  avaliacoes:
  {
    flex: 1,
  }
});