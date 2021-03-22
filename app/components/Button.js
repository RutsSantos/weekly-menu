import React from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function Button() {
    return (
      <View style={}>
        <Text>Home!</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});