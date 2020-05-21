import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'stretch',
    backgroundColor: "#8dd7cf",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#2194BF",
  },

  button: {
    width: 150,
    height: 50,
    borderRadius: 7,
    backgroundColor: "#161925",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1.5,
    borderRadius: 10,
  },

  buttonText: {
    color: "#CBF7ED"
  },

  produto: {
    alignSelf: 'center',
    resizeMode: 'cover',
    width: 190,
    height: 190,
    marginVertical: '5%',
    resizeMode: 'cover',
    borderRadius: 95,
  },

  inputNum: {
    backgroundColor: '#FFF',
    height: '45%',
    width: '39%',
    marginBottom: 4,
    color: '#191919',
    fontSize: 17,
    padding: 8,
    marginBottom: '5%',
    marginRight: '1%',
    borderWidth: 1.5,
    borderRadius: 10,
  },

  inputqtd: {
    backgroundColor: '#FFF',
    height: '45%',
    width: '39%',
    marginBottom: 4,
    color: '#191919',
    fontSize: 17,
    padding: 8,
    marginBottom: '5%',
    borderWidth: 1.5,
    borderRadius: 10,
  },

  qtd: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  comentario: {
    backgroundColor: '#FFF',
    height: '10%',
    width: '80%',
    marginBottom: 4,
    color: '#191919',
    fontSize: 17,
    padding: 5,
    marginBottom: '5%',
    borderWidth: 1.5,
    borderRadius: 10,
  },

  input: {
    backgroundColor: '#FFF',
    width: '80%',
    height: '5%',
    marginBottom: 4,
    color: '#191919',
    fontSize: 17,
    padding: 8,
    marginBottom: '5%',
    borderWidth: 1.5,
    borderRadius: 10,
  },

  dropdown: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    color: '#191919',
    fontSize: 17,
    padding: 8,
    marginBottom: '5%',
    marginTop: 50,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    alignItems: 'flex-start',
    alignContent: 'flex-start',

  }
});