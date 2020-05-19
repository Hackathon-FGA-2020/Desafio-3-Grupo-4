import React, { Component } from "react";
import {
    Text,
    KeyboardAvoidingView,
    Image,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { styles } from './styles';

export default class Cadastro extends Component {
    state = {
        senhaAntinga: '',
        novaSenha: '',
        novaSenhaRepeat: '',
        phoneBR: '',
        zipCode: '',
        endereco: '',
        num: '',
        complemento: '',
        bairro: '',
        cidade: '',
    }
    render() {

        return (
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}>

                <KeyboardAvoidingView style={styles.background}>
                    <Image
                        style={styles.Logo}
                        source={require('./FotoPerfil.png')}
                    />

                    <View style={styles.container}>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua senha"
                            autoCorrect={false}
                            value={this.state.senhaAntinga}
                            onChangeText={text => {
                                this.setState({
                                    senhaAntinga: text
                                })
                            }}
                            secureTextEntry={true}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Digite uma nova senha"
                            autoCorrect={false}
                            value={this.state.novaSenha}
                            onChangeText={text => {
                                this.setState({
                                    novaSenha: text
                                })
                            }}
                            secureTextEntry={true}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Repita a nova senha"
                            autoCorrect={false}
                            value={this.state.novaSenhaRepeat}
                            onChangeText={text => {
                                this.setState({
                                    novaSenhaRepeat: text
                                })
                            }}
                            secureTextEntry={true}
                        />

                        <TextInputMask
                            style={styles.input}
                            placeholder="Telefone"
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99) '
                            }}
                            value={this.state.phoneBR}
                            onChangeText={text => {
                                this.setState({
                                    phoneBR: text
                                })
                            }}
                        />

                        <TextInputMask
                            style={styles.input}
                            placeholder="CEP"
                            type={'zip-code'}
                            value={this.state.zipCode}
                            onChangeText={text => {
                                this.setState({
                                    zipCode: text
                                })
                            }}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Endereço"
                            autoCorrect={false}
                            value={this.state.endereco}
                            onChangeText={text => {
                                this.setState({
                                    endereco: text
                                })
                            }}
                        />
                        <View style={styles.numeroComplemento}>
                            <TextInput
                                style={styles.inputNum}
                                placeholder="N°"
                                autoCorrect={false}
                                value={this.state.num}
                                onChangeText={text => {
                                    this.setState({
                                        num: text
                                    })
                                }}
                            />

                            <TextInput
                                style={styles.inputComplemento}
                                placeholder="Complemento"
                                autoCorrect={false}
                                value={this.state.complemento}
                                onChangeText={text => {
                                    this.setState({
                                        complemento: text
                                    })
                                }}
                            />
                        </View>

                        <TextInput
                            style={styles.input}
                            placeholder="Bairro"
                            autoCorrect={false}
                            value={this.state.bairro}
                            onChangeText={text => {
                                this.setState({
                                    bairro: text
                                })
                            }}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Cidade"
                            autoCorrect={false}
                            value={this.state.cidade}
                            onChangeText={text => {
                                this.setState({
                                    cidade: text
                                })
                            }}
                        />


                        <TouchableOpacity style={styles.submitBtn}>
                            <Text style={styles.submitText}>
                                Concluir
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

