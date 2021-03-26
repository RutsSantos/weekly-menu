import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../views/Home';
import ShoppingList from '../../views/ShoppingList';
import Login from '../../views/Login';
import Navigation from './Navigation';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
      <Stack.Screen name="AppHome" component={Navigation}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}