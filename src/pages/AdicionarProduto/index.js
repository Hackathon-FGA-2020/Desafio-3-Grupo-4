import React, { Component } from "react";
import { Text, KeyboardAvoidingView, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-community/picker";
import { TextInputMask } from 'react-native-masked-text'
import { addItem } from "../../api";

export default class AdicionarProduto extends Component {

  state = {
    categoria: '',
    nomeDoProduto: '',
    preco: '',
    qtd: '',
    comentario: '',
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <TouchableOpacity onPress={this._pickImage} style={styles.produto}>
            {image && <Image style={styles.produto} source={{ uri: image }} />}
            <Image
              style={styles.produto}
              source={
                image === null
                  ? require("./user.png")
                  : { uri: image.uri }
              }
            />
          </TouchableOpacity>
          <View style={styles.dropdown}>
            <Picker
              selectedValue={this.state.categoria}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ categoria: itemValue })
              }>
              <Picker.Item label="Banana" value="Banana" />
              <Picker.Item label="Laranja" value="Laranja" />
            </Picker>
          </View>
          <TextInput style={styles.input}
            placeholder="Nome do Produto (ex. Alface Americana)"
            autoCorrect={true}
            value={this.state.nomeDoProduto}
            onChangeText={text => { this.setState({ nomeDoProduto: text }) }}
          />

          <TextInput style={styles.comentario}
            placeholder="Comentário"
            autoCorrect={true}
            value={this.state.comentario}
            onChangeText={text => { this.setState({ comentario: text }) }}
          />

          <View style={styles.qtd}>
            <TextInputMask style={styles.inputNum}
              type={'money'}
              options={{
                precision: 2,
                separator: '.',
                delimiter: '.',
                unit: 'R$',
                suffixUnit: ''
              }}
              placeholder="Preço"
              value={this.state.preco}
              onChangeText={text => { this.setState({ preco: text }) }}
            />
            <TextInput
              keyboardType={'numeric'}
              placeholder="Qtd"
              maxLength={5}
              value={this.state.qtd}
              onChangeText={text => { this.setState({ qtd: text }) }}
              style={styles.inputqtd}
            />
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => {this.props.navigation.navigate("ProdutosCadastrados"),  this.addProduct()}}>
              <Text style={styles.buttonText}> Cadastrar Produto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  addProduct(){
    var obj = {};
    obj.categoryId = null
    obj.description = this.state.comentario 
    obj.price = parseFloat(this.state.preco.substring(2))
    obj.title = this.state.nomeDoProduto
    obj.sellerId = null
    obj.img = this.state.image
    
    addItem('products', obj)
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      alert("Desculpe, precisamos de permissões de rolagem da câmera para fazer isso funcionar!");
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}