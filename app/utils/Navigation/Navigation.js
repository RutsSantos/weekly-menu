import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import Icon from 'react-native-ico';

import HomeScreen from '../../views/Home';
import NewMenu from '../../views/NewMenu';
import Profile from '../../views/Profile';
import HomeStack from './HomeStack';
import Colors from '../../constants/Colors';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'New') {
          iconName = 'plus';
        } else if (route.name === 'Profile') {
          iconName = 'user';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} color={focused ? Colors.ACCENT : Colors.SECONDARY} height="25" width="25"  group="essential" />;
      },
    })}
    tabBarOptions={{
      activeTintColor: Colors.ACCENT,
      inactiveTintColor: Colors.SECONDARY,
      showLabel: false,
      style: [{height: 90}]
    }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="New" component={NewMenu} />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
  );
}