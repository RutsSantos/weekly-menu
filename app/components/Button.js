import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

export default function Button({ onClick, text, outlined }) {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={
        outlined
          ? [styles.outlined, styles.button]
          : [styles.solid, styles.button]
      }>
      <Text style={outlined ? [styles.text, styles.t_outlined] : styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    width: 282,
    height: 50,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  outlined: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
  },
  solid: {
    backgroundColor: Colors.PRIMARY,
  },
  text: {
    color: Colors.WHITE,
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
  },
  t_outlined: {
    color: Colors.PRIMARY,
  },
});
