import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Rating from './rating';
import {styles} from './styles';


export default class PerfilPrivado extends React.Component {
  render(){
    return (
      
      <View style={styles.background}>

        <View style={styles.informacoes}>
          <View style={styles.esq}>
            <Image style={styles.img} source={require('./usuario.png')}/>
            <Text style={styles.nome}>Andre Gouvea Maciel</Text>
            <Text style={styles.nome}>Brasilia-DF</Text>
          </View>

          <View style={styles.dir}>
            <TouchableOpacity style={styles.btnEditar}>
              <Text style={styles.txtEditar}>Editar Perfil</Text>
            </TouchableOpacity>
            <Text style={styles.txtVendidos}>100 produtos vendidos</Text>
            <Text style={styles.avaliacoes}>53 avaliações</Text>
            <Rating/>
          </View>

        </View>

        <View style={styles.telaOpcoes}>
          <TouchableOpacity style={styles.botoes}>
            <Text>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Text>Produtos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Text>Compras</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
};
