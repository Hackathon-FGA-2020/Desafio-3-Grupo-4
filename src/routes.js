import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Inicial from './pages/Inicial';
import Categorias from './pages/Categorias';
import PerfilPrivado from './pages/PerfilPrivado';
import PerfilPublico from './pages/PerfilPublico';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown:false}}>
      <Stack.Screen name="PerfilPublico" component={PerfilPublico}/>
    </Stack.Navigator>
  );
}
