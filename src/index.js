import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Inicial from "./pages/Inicial";
import Categoria from "./pages/Categoria";
import Produto from "./pages/Produto";
import Login from "./pages/Login";
import PerfilPrivado from "./pages/PerfilPrivado";
import PerfilPublico from "./pages/PerfilPublico";
import Busca from "./pages/Busca";
import Carrinho from "./pages/Carrinho";
import ProdutosCadastrados from "./pages/ProdutosCadastrados";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <>
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Categoria" component={Categoria} />
        <Stack.Screen name="Produto" component={Produto} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PerfilPrivado" component={PerfilPrivado} />
        <Stack.Screen name="PerfilPublico" component={PerfilPublico} />
        <Stack.Screen name="Busca" component={Busca} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="ProdutosCadastrados" component={ProdutosCadastrados} />
      </Stack.Navigator>
    </>
  );
}
