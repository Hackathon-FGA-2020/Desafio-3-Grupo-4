import React, { Component } from 'react';
import { Text, View, Button} from 'react-native';
import { styles } from './styles';

export default class Inicial extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text> Commit Inicial </Text>
        <Button title="Produto" onPress={() => this.props.navigation.navigate("Produto")}></Button>
      </View>
    );
  }

}