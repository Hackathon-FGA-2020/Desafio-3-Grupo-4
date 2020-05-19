import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProdutosCadastrados from './pages/ProdutosCadastrados';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown:false}}
      >
      <Stack.Screen name="ProdutosCadastrados" component={ProdutosCadastrados}/>
    </Stack.Navigator>
  );
}
