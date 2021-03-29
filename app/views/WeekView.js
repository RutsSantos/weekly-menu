import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Icon from "react-native-ico";
import moment from "moment";
import Colors from "../constants/Colors";
import { Title, SubTitle, ContentText } from "../components/Text";
import ArrowBack from "../components/ArrowBack";
import { DayMeal } from "../components/DayMeal";
import {Storage} from "../constants/Storage";

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
  const monday = moment().subtract(new Date().getDay(), "d").add(1, "d");
  const sunday = moment(monday).add(6, "d");
  const today = new Date();
  useEffect(() => {
    getData(Storage.WEEK_MENU).then((list) => {
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
            text={`${monday.format("DD/MM")} - ${sunday.format("DD/MM")}`}
            size={21}
          />
          <Title text='Menú de la semana' />
          {today > sunday ? (
            <ContentText text='¡Oh vaya! Ya es tiempo de generar un nuevo menú, este pertenece a la semana pasada.' />
          ) : (
            <ContentText text='A continuación las comidas para esta semana, Recuerda revisar tu despensa para confirmar que tengas todos los ingredientes que necesitas, también están detallados en la opción de "Comprar" en la página de inicio.'  />
          )}
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
