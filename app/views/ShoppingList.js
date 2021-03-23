import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Icon from "react-native-ico";
import { ListItem, CheckBox, Fab } from "native-base";
import Colors from "../constants/Colors";
import { Title, ContentText } from "../components/Text";
import ArrowBack from "../components/ArrowBack";

export default function ShoppingList({ navigation }) {
  const checked = false;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <ArrowBack navigation={navigation} />
          <Title text='Lista de compras' />
          <ContentText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero aliquet tincidunt nunc dui, lacus eu sed turpis.' />
          <View style={{ marginTop: "5%" }}>
            <ListItem>
              <CheckBox checked={checked} color={Colors.PRIMARY} />
              <View style={{ marginLeft: 15 }}>
                <ContentText text='hola' />
              </View>
            </ListItem>
            <ListItem>
              <CheckBox checked={checked} color={Colors.PRIMARY} />
              <View style={{ marginLeft: 15 }}>
                <ContentText text='hola' />
              </View>
            </ListItem>
            <ListItem>
              <CheckBox checked={checked} color={Colors.PRIMARY} />
              <View style={{ marginLeft: 15 }}>
                <ContentText text='hola' />
              </View>
            </ListItem>
            <ListItem>
              <CheckBox checked={checked} color={Colors.PRIMARY} />
              <View style={{ marginLeft: 15 }}>
                <ContentText text='hola' />
              </View>
            </ListItem>
            <ListItem>
              <CheckBox checked={checked} color={Colors.PRIMARY} />
              <View style={{ marginLeft: 15 }}>
                <ContentText text='hola' />
              </View>
            </ListItem>
            <ListItem>
              <CheckBox checked={checked} color={Colors.PRIMARY} />
              <View style={{ marginLeft: 15 }}>
                <ContentText text='hola' />
              </View>
            </ListItem>
            <ListItem>
              <CheckBox checked={checked} color={Colors.PRIMARY} />
              <View style={{ marginLeft: 15 }}>
                <ContentText text='hola' />
              </View>
            </ListItem>
            <ListItem>
              <CheckBox checked={checked} color={Colors.PRIMARY} />
              <View style={{ marginLeft: 15 }}>
                <ContentText text='hola' />
              </View>
            </ListItem>
            <ListItem>
              <CheckBox checked={checked} color={Colors.PRIMARY} />
              <View style={{ marginLeft: 15 }}>
                <ContentText text='hola' />
              </View>
            </ListItem>
            <ListItem>
              <CheckBox checked={checked} color={Colors.PRIMARY} />
              <View style={{ marginLeft: 15 }}>
                <ContentText text='hola' />
              </View>
            </ListItem>
            <ListItem>
              <CheckBox checked={checked} color={Colors.PRIMARY} />
              <View style={{ marginLeft: 15 }}>
                <ContentText text='hola' />
              </View>
            </ListItem>
          </View>
        </View>
      </ScrollView>

      <Fab
        active={true}
        direction='up'
        containerStyle={{}}
        style={{ backgroundColor: Colors.ACCENT }}
        position='bottomRight'
        onPress={() => this.setState({ active: !this.state.active })}>
        <Icon name='plus' color={Colors.WHITE} group='ui-interface' />
      </Fab>
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
