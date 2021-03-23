import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export function Title({ text }) {
  return <Text style={styles.title}>{text}</Text>;
}

export function SubTitle({ text, size }) {
  return <Text style={[styles.subtitle, {fontSize: size}]}>{text}</Text>;
}

export function ContentText({ text, color }) {
  return <Text style={[styles.text, {color: color}]}>{text}</Text>;
}

export function CardTitle({ text, color }) {
  return <Text style={[styles.CardTitle, {color: color}]}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Montserrat-SemiBold",
    color: Colors.PRIMARY,
    fontSize: 26,
    marginVertical: 8,
  },
  subtitle: {
    fontFamily: "Montserrat-Medium",
    color: Colors.PRIMARY,
    fontSize: 22,
  },
  text: {
    fontFamily: "Montserrat-Regular",
    color: Colors.SECONDARY,
    fontSize: 14,
    marginVertical: 8,
  },
  CardTitle: {
    fontFamily: "Montserrat-SemiBold",
    color: Colors.PRIMARY,
    fontSize: 18,
    marginVertical: 8,
    marginHorizontal: 5
  }
});
