import React from "react";
import { View } from "react-native";
import Icon from "react-native-ico";

import { DayMealItem } from "./DayMealItem";
import Colors from "../constants/Colors";
import { Title, SubTitle, ContentText } from "./Text";


export function DayMeal({ dayFoodList }) {
    return (
      <View style={{ marginVertical: 25 }}>
        <DayMealItem color={Colors.PURPLE} text={dayFoodList.breakfast.name} />
        <DayMealItem color={Colors.CIAN} text={dayFoodList.lunch.name} />
        <DayMealItem color={Colors.YELLOW} text={dayFoodList.dinner.name} />
      </View>
    );
  }


 export function ColorCodeItem({ text, color }) {
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
export  function ColorCode() {
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