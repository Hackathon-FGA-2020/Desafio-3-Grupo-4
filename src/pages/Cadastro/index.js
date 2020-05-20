import React, { Component } from "react";
import {
  Text,
  KeyboardAvoidingView,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { styles } from "./styles";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

export default class Cadastro extends Component {
  state = {
    usuario: "",
    senha: "",
    senhaRepetida: "",
    email: "",
    cpf: "",
    phoneBR: "",
    zipCode: "",
    endereco: "",
    num: "",
    complemento: "",
    bairro: "",
    cidade: "",
    image: null,
  };
  render() {
    let { image } = this.state;
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAvoidingView style={styles.background}>
          <TouchableOpacity onPress={this._pickImage} style={styles.Logo}>
            {image && <Image style={styles.Logo} source={{ uri: image }} />}
            <Image
              style={styles.Logo}
              source={
                image === null
                  ? require("./FotoPerfil.png")
                  : { uri: image.uri }
              }
            />
          </TouchableOpacity>

          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Usuario"
              value={this.state.usuario}
              autoCorrect={false}
              onChangeText={(text) => {
                this.setState({
                  usuario: text,
                });
              }}
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              autoCorrect={false}
              value={this.state.senha}
              onChangeText={(text) => {
                this.setState({
                  senha: text,
                });
              }}
              secureTextEntry={true}
            />

            <TextInput
              style={styles.input}
              placeholder="Digite a senha novamente"
              autoCorrect={false}
              value={this.state.senhaRepetida}
              onChangeText={(text) => {
                this.setState({
                  senhaRepetida: text,
                });
              }}
              secureTextEntry={true}
            />

            <TextInput
              style={styles.input}
              placeholder="E-mail"
              autoCorrect={false}
              value={this.state.email}
              onChangeText={(text) => {
                this.setState({
                  email: text,
                });
              }}
            />

            <TextInputMask
              style={styles.input}
              type={"cpf"}
              value={this.state.cpf}
              placeholder="CPF"
              onChangeText={(text) => {
                this.setState({
                  cpf: text,
                });
              }}
            />

            <TextInputMask
              style={styles.input}
              placeholder="Telefone"
              type={"cel-phone"}
              options={{
                maskType: "BRL",
                withDDD: true,
                dddMask: "(99) ",
              }}
              value={this.state.phoneBR}
              onChangeText={(text) => {
                this.setState({
                  phoneBR: text,
                });
              }}
            />

            <TextInputMask
              style={styles.input}
              placeholder="CEP"
              type={"zip-code"}
              value={this.state.zipCode}
              onChangeText={(text) => {
                this.setState({
                  zipCode: text,
                });
              }}
            />

            <TextInput
              style={styles.input}
              placeholder="Endereço"
              autoCorrect={false}
              value={this.state.endereco}
              onChangeText={(text) => {
                this.setState({
                  endereco: text,
                });
              }}
            />
            <View style={styles.numeroComplemento}>
              <TextInput
                style={styles.inputNum}
                placeholder="N°"
                autoCorrect={false}
                value={this.state.num}
                onChangeText={(text) => {
                  this.setState({
                    num: text,
                  });
                }}
              />

              <TextInput
                style={styles.inputComplemento}
                placeholder="Complemento"
                autoCorrect={false}
                value={this.state.complemento}
                onChangeText={(text) => {
                  this.setState({
                    complemento: text,
                  });
                }}
              />
            </View>

            <TextInput
              style={styles.input}
              placeholder="Bairro"
              autoCorrect={false}
              value={this.state.bairro}
              onChangeText={(text) => {
                this.setState({
                  bairro: text,
                });
              }}
            />

            <TextInput
              style={styles.input}
              placeholder="Cidade"
              autoCorrect={false}
              value={this.state.cidade}
              onChangeText={(text) => {
                this.setState({
                  cidade: text,
                });
              }}
            />

            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => {
                console.log(this.state);
              }}
            >
              <Text style={styles.submitText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Desculpe, precisamos de permissões de rolagem da câmera para fazer isso funcionar!");
      }
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
