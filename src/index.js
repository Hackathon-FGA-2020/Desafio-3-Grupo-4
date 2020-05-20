import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import comprasEfetuadasIndex from './pages/comprasEfetuadas';
import Inicial from './pages/Inicial';
import Categorias from './pages/Categorias';
import pedidoRecebidoIndex from './pages/detalhesCompra/pedidoRecebidoIndex';
import pedidoFeitoIndex from './pages/detalhesPedidoFeito/pedidoFeitoIndex'
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown:false}}
      >
      <Stack.Screen name="comprasEfetuadas" component={comprasEfetuadasIndex} />
      <Stack.Screen name="detalhesCompra" component={pedidoRecebidoIndex} />
      <Stack.Screen name="detalhesPedidoFeito" component={pedidoFeitoIndex} />
      
    </Stack.Navigator>
  );
}


