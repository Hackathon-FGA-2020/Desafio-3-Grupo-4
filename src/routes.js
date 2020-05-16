import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Inicial from './pages/Inicial';
import Categoria from './pages/Categoria';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown:false}}
      >
      <Stack.Screen name="Inicial" component={Inicial}/>
      <Stack.Screen name="Categoria" component={Categoria}/>
    </Stack.Navigator>
  );
}
