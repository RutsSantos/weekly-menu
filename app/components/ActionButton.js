import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-ico";
import Colors from "../constants/Colors";

export default function ActionButton({ onClick, text, iconName }) {
  return (
    <View>
      <TouchableOpacity onPress={onClick} style={styles.button}>
        <Icon
          name={iconName}
          height='35'
          width='35'
          color={Colors.PRIMARY}
          group='basic'
        />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  text: {
    color: Colors.SECONDARY,
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    alignSelf: "center",
    marginTop: 15,
  },
});
