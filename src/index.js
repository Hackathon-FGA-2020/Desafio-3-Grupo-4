import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Inicial from "./pages/Inicial";
import Categoria from "./pages/Categoria";
import Produto from "./pages/Produto";
import Login from "./pages/Login";

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
      </Stack.Navigator>
    </>
  );
}
