import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { Title, ContentText } from "../components/Text";
import Button from "../components/Button";
import { getFoodItem } from "../utils/api/firebaseConfig";

export default function NewMenu() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/img/salad.jpg")}
          blurRadius={2}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Title text="Generar nuevo menú" />
        <ContentText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero aliquet tincidunt nunc dui, lacus eu sed turpis." />
        <View style={{marginTop: "25%"}}>
            <Button text="Iniciar" onClick={()=>getFoodItem()}/>
        </View>
      </View>
    </View>
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
  header: {
    height: "45%",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    opacity: 0.6,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
