import React from "react";
import { StyleSheet } from "react-native";
import { Item, Input, Label } from "native-base";
import Colors from "../constants/Colors";

export default function LoginInput({ label, type, onChange, text }) {
  return (
    <Item floatingLabel style={styles.item}>
      <Label style={styles.label}>{label}</Label>
      <Input
        onChangeText={onChange}
        value={text}
        autoCapitalize='none'
        secureTextEntry={type == "password" ? true : false}
        style={{ height: 60, color: Colors.SECONDARY }}
      />
    </Item>
  );
}

const styles = StyleSheet.create({
  label: {
    color: Colors.PRIMARY,
  },
  item: {
    marginVertical: 15,
  },
});
