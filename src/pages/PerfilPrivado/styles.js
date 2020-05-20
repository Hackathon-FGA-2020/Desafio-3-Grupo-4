import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  background: 
  {
    paddingTop: '10%',
    flex: 1,
    backgroundColor: '#8dd7cf',
    alignItems: 'center',
    justifyContent: 'center',
  },

  informacoes:
  {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  telaOpcoes:
  {
    width: '100%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botoes:
  {
    backgroundColor: 'white',
    width: '90%',
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
    marginRight: '10%',
    marginLeft: '10%',
    marginTop: '10%',

  },

  txtEditar:
  {
    color:'white',
  },

  img:
  {
    resizeMode: 'contain',
    marginTop: '10%',
    marginLeft: '10%',
    width:'80%',
    height:'50%',
    borderRadius: 180,
  },

  esq:
  {
    height:'100%',
    flex:1,
    backgroundColor:'white',

  },

  dir:
  {
    flex:1,
    backgroundColor:'white',
    height: '100%',
    alignItems: 'center',
  },

  txtVendidos:
  {
    marginTop: '10%',
    flex:0,
  },

  avaliacoes:
  {
    marginTop: '10%',
    flex: 1,
  }
});