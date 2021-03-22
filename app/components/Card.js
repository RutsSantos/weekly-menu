import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "native-base";
import Icon from "react-native-ico";
import Colors from "../constants/Colors";
import { ContentText, CardTitle } from "./Text";

export function Cards({ title, content, iconName, background, color }) {
  return (
    <Card style={{ backgroundColor: background, marginTop: 30 }}>
      <View style={styles.cardContent}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {iconName ? (
            <Icon
              name={iconName}
              height='25'
              width='25'
              color={Colors.PRIMARY}
              group='essential'
            />
          ) : null}
          <CardTitle text={title} color={color ? color : Colors.PRIMARY} />
        </View>
        <ContentText text={content} color={color} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    margin: 25,
  },
});
