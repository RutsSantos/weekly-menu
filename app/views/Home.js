import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import { Title, SubTitle } from "../components/Text";
import { Cards } from "../components/Card";
import ActionButton from "../components/ActionButton";

const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <SubTitle text='Buen día' size={22} />
        <Title text='John Doe' />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 40,
          }}>
          <ActionButton text='Hoy' iconName='calendar' />
          <ActionButton
            text='Semana'
            iconName='cutlery'
            onClick={() => navigation.navigate("WeekView")}
          />
          <ActionButton
            text='Comprar'
            iconName='shopping-cart'
            onClick={() => navigation.navigate("ShoppingList")}
          />
        </View>

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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  content: { paddingHorizontal: 30, paddingTop: 60 },
  cardContent: {
    margin: 25,
  },
});
