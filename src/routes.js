import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Inicial from './pages/Inicial';
import Categorias from './pages/Categorias';
import Login from './pages/Login';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown:false}}
      >
      <Stack.Screen name="Inicial" component={Inicial}/>
      <Stack.Screen name="Categorias" component={Categorias}/>
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  );
}
