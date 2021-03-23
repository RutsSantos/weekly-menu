import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../views/Home';
import ShoppingList from '../../views/ShoppingList';
import WeekView from '../../views/WeekView';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
      <Stack.Screen name="ShoppingList" component={ShoppingList}  options={{ headerShown: false }} />
      <Stack.Screen name="WeekView" component={WeekView}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}