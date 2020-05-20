import React, { Component } from "react";
import { TextInput, Text, View, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from "react-native";

import { styles } from "./styles";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "android" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.logo_image}>
          <Image
            source={require("../../../assets/images/Tela_login/logo_app.png")}
          />
        </View>

        <View style={styles.container_text}>
          <Text style={styles.title}>AgroShop</Text>
          <Text style={styles.slogan}>Not Only Vegan Online Market</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry={true}
        />

        <Text style={styles.text}>Não possui cadastro?</Text>

        <View style={styles.button}>
          <View style={styles.buttonL}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Inicial")}}>
              <Text style={styles.buttonText}>Logar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonR}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Cadastro")}>
              <Text style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
