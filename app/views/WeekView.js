import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Icon from "react-native-ico";
import Colors from "../constants/Colors";
import { Title, SubTitle, ContentText } from "../components/Text";
import ArrowBack from "../components/ArrowBack";
import { DayMeal } from "../components/DayMeal";

import { daysOfWeek, getData } from "../utils/Helpers";

function ColorCodeItem({ text, color }) {
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
  );
}
function ColorCode() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20,
        marginRight: 25,
      }}>
      <ColorCodeItem text='Desayuno' color={Colors.PURPLE} />
      <ColorCodeItem text='Almuerzo' color={Colors.CIAN} />
      <ColorCodeItem text='Cena' color={Colors.YELLOW} />
    </View>
  );
}
export default function WeekView({ navigation }) {
  const [foodList, setFoodList] = useState([]);
  let [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  const dateRangeLow = day - (new Date().getDay() - new Date().getDay() + 1);
  const dateRangeHigh = dateRangeLow + 6; //Gotta fix this

  useEffect(() => {
    getData("WEEK_MENU").then((list) => {
      setFoodList(list);
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <ArrowBack navigation={navigation} />

          <View style={{ marginTop: 30 }}></View>
          <SubTitle
            text={`${dateRangeLow}/${month} - ${dateRangeHigh}/${month}`}
            size={21}
          />
          <Title text='Menú de la semana' />
          <ContentText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero aliquet tincidunt nunc dui, lacus eu sed turpis.' />
          <ColorCode />
          {foodList
            ? foodList.map((day, index) => (
                <View key={index}>
                  <SubTitle text={daysOfWeek[index]} size={18} />
                  <DayMeal dayFoodList={day[daysOfWeek[index]]} />
                </View>
              ))
            : null}
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
