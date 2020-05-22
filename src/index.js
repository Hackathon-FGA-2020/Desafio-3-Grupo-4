import React, { Component } from "react";
import { StatusBar, YellowBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Inicial from "./pages/Inicial";
import Categoria from "./pages/Categoria";
import Produto from "./pages/Produto";
import Login from "./pages/Login";
import PerfilPrivado from "./pages/PerfilPrivado";
import PerfilPublico from "./pages/PerfilPublico";
import EditarPerfil from "./pages/EditarPerfil";
import Cadastro from "./pages/Cadastro";
import Busca from "./pages/Busca";
import Carrinho from "./pages/Carrinho";
import ProdutosCadastrados from "./pages/ProdutosCadastrados";
import ComprasEfetuadas from "./pages/ComprasEfetuadas";
import PedidoRecebido from "./pages/DetalhesCompra";
import DetalhesPedidoFeito from "./pages/DetalhesPedidoFeito";
import AdicionarProduto from "./pages/AdicionarProduto";

const Stack = createStackNavigator();

export default class Routes extends Component {
  constructor() {
    super();
    YellowBox.ignoreWarnings(["Setting a timer"]);
  }
  render() {
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
          <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Busca" component={Busca} />
          <Stack.Screen name="Carrinho" component={Carrinho} />
          <Stack.Screen
            name="ProdutosCadastrados"
            component={ProdutosCadastrados}
          />
          <Stack.Screen name="ComprasEfetuadas" component={ComprasEfetuadas} />
          <Stack.Screen name="DetalhesCompra" component={PedidoRecebido} />
          <Stack.Screen
            name="DetalhesPedidoFeito"
            component={DetalhesPedidoFeito}
          />
          <Stack.Screen name="AdicionarProduto" component={AdicionarProduto} />
        </Stack.Navigator>
      </>
    );
  }
}
