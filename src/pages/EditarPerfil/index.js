import React, { Component } from "react";
import {
  Text,
  KeyboardAvoidingView,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { styles } from "./styles";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

export default class Cadastro extends Component {
  state = {
    senhaAntinga: "",
    novaSenha: "",
    novaSenhaRepeat: "",
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
              placeholder="Digite sua senha"
              autoCorrect={false}
              value={this.state.senhaAntinga}
              onChangeText={(text) => {
                this.setState({
                  senhaAntinga: text,
                });
              }}
              secureTextEntry={true}
            />

            <TextInput
              style={styles.input}
              placeholder="Digite uma nova senha"
              autoCorrect={false}
              value={this.state.novaSenha}
              onChangeText={(text) => {
                this.setState({
                  novaSenha: text,
                });
              }}
              secureTextEntry={true}
            />

            <TextInput
              style={styles.input}
              placeholder="Repita a nova senha"
              autoCorrect={false}
              value={this.state.novaSenhaRepeat}
              onChangeText={(text) => {
                this.setState({
                  novaSenhaRepeat: text,
                });
              }}
              secureTextEntry={true}
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
              ref={(ref) => this.cepField = ref}
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
                keyboardType='numeric'
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

            <TouchableOpacity style={styles.submitBtn} onPress={() => { this.verificaFormulario() }}>
              <Text style={styles.submitText}>Concluir</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }

  verificaFormulario() {
    if (this.state.novaSenha !== this.state.novaSenhaRepeat) {
      return Alert.alert("As senhas não são iguais, por favor, digite novamente");
    }
    const cepIsValid = this.cepField.isValid()
    if (!cepIsValid) {
      return Alert.alert("Digite um CEP válido");
    }
    return this.props.navigation.navigate("PerfilPrivado")
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
