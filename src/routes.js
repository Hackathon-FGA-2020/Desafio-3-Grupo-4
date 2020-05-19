import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Inicial from './pages/Inicial';
import Categoria from './pages/Categoria';
import Cadastro from './pages/Cadastro';
import EditarPerfil from './pages/EditarPerfil';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown:false}}
      >
      <Stack.Screen name="Cadastro" component={Cadastro}/>
    </Stack.Navigator>
  );
}
