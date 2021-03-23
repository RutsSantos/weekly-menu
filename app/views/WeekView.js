import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Icon from "react-native-ico";
import Colors from "../constants/Colors";
import { Title, SubTitle, ContentText } from "../components/Text";
import Button from "../components/Button";
import ArrowBack from "../components/ArrowBack";
import { DayMealItem } from "../components/DayMealItem";
import { Row } from "native-base";

const daysOfWeek = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

function ColorCodeItem( {text, color}) {
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon
          name='filled-circle'
          color={color}
          height='12'
          group='material-design'
        />
        <ContentText text={text} />
      </View>
    )
}
function ColorCode() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 20, marginRight: 25 }}>
      <ColorCodeItem text="Desayuno" color={Colors.PURPLE} />
      <ColorCodeItem text="Almuerzo" color={Colors.CIAN} />
      <ColorCodeItem text="Cena" color={Colors.YELLOW} />
    </View>
  );
}
function DayMeal() {
  return (
    <View style={{ marginVertical: 25 }}>
      <DayMealItem
        color={Colors.PURPLE}
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
      />
      <DayMealItem
        color={Colors.CIAN}
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
      />
      <DayMealItem
        color={Colors.YELLOW}
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
      />
    </View>
  );
}
export default function WeekView({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <ArrowBack navigation={navigation} />

          <View style={{ marginTop: 30 }}></View>
          <SubTitle text='21/03 - 30/03' size={21} />
          <Title text='Menú de la semana' />
          <ContentText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero aliquet tincidunt nunc dui, lacus eu sed turpis.' />
          <ColorCode />
          {daysOfWeek.map((day) => (
            <View>
              <SubTitle text={day} size={18} />
              <DayMeal />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },
  content: {
    paddingHorizontal: 30,
    paddingTop: 50,
  },
});
