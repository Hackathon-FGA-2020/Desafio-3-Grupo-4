import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = { cart: [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART": {
      if (!state.cart.includes(action.data)) {
        return { cart: state.cart.concat([action.data]) };
      } else return state;
    }
    case "REMOVE_CART": {
      if (state.cart.includes(action.data)) {
        state.cart.splice(state.cart.indexOf(action.data), 1);
        return { cart: state.cart };
      } else return state;
    }
    case "CLEAR_CART": {
      return initialState;
    }
  }
  return state;
};
const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </Provider>
);

export default App;
