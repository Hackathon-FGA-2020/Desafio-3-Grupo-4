import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Inicial from './pages/Inicial';
import Busca from './pages/Busca';
import Carrinho from './pages/Carrinho';
import Categorias from './pages/Categorias';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown:false}}
      >
      <Stack.Screen name="Inicial" component={Inicial}/>
      <Stack.Screen name="Categorias" component={Categorias}/>
      <Stack.Screen name="Busca" component={Busca}/>
      <Stack.Screen name="Carrinho" component={Carrinho}/>
    </Stack.Navigator>
  );
}
