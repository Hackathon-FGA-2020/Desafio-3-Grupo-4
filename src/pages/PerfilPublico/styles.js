import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  background:
  {
    flex: 1,
    backgroundColor: '#2194BF',
    alignItems: 'center',
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

  telaProdutos:
  {
    width: '100%',
    flex: 2,
    marginHorizontal: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },

  botoes:
  {
    backgroundColor: 'white',
    width: "90%",
    height: '20%',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },

  btnEditar:
  {
    direction: 'rtl',
    backgroundColor: '#836FFF',
    width: '50%',
    height: '20%',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
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
    color: 'white',
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
    marginTop: '10%',
    flex: 0,
  },

  avaliacoes:
  {
    marginTop: '10%',
    flex: 1,
  },

  produtos:
  {
    height: 130,
    backgroundColor: 'white',
    marginVertical: 15,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 7,
    flexDirection: 'row',
  },

  imgProduto:
  {
    resizeMode: 'cover',
  },

  prodDireita:
  {
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'center',
  },

  prodEsquerda:
  {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }

});