import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { Title, SubTitle } from "../components/Text";
import { Cards } from "../components/Card";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SubTitle text='Buen día' />
      <Title text='John Doe' />
      <Cards
        iconName='idea'
        title='Tip:'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium eros et nulla tempor, sed rhoncus massa pharetra.'
      />
      <Cards
        background={Colors.PRIMARY}
        color={Colors.WHITE}
        title='Agregar platillo al menú'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
    paddingHorizontal: 30,
    paddingVertical: 80,
  },
  cardContent: {
    margin: 25,
  },
});
