import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Icon from "react-native-ico";
import { ListItem, CheckBox, Fab, Left, Right } from "native-base";
import Colors from "../constants/Colors";
import { Title, ContentText } from "../components/Text";
import ArrowBack from "../components/ArrowBack";
import { getData, storeData } from "../utils/Helpers";
import { Storage } from "../constants/Storage";

export default function ShoppingList({ navigation }) {
  const [shoppingList, setShoppingList] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    getData(Storage.SHOPPING).then((data) => {
      setShoppingList(data);
    });
  }, [checked]);

  const handleCheck = async (id) => {
    let newShoppingList = [];
    shoppingList.map((elem) => {
      if (elem[0] === id) {
        elem[2].checked = !elem[2].checked;
      }
      newShoppingList.push(elem);
    });
    await storeData(Storage.SHOPPING, newShoppingList), setChecked(!checked);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <ArrowBack navigation={navigation} />
          <Title text='Lista de compras' />
          <ContentText text='La siguiente lista consta de los alimentos que debes tener a mano para preparar el menú de esta semana. - El número que está a la derecha es la cantidad de veces que se utiliza el ingrediente durante la semana.' />
          <View style={{ marginTop: "5%" }}>
            {shoppingList.map((elem) => (
              <ListItem key={elem[0]}>
                <Left  style={{alignItems: "center"}}>
                  <CheckBox
                    checked={elem[2].checked}
                    onPress={async () => await handleCheck(elem[0])}
                    color={Colors.PRIMARY}
                  />
                  <View style={{ marginLeft: 25 }}>
                    <ContentText text={elem[0].charAt(0).toUpperCase() + elem[0].slice(1)} />
                  </View>
                </Left>

                <View>
                  <ContentText text={elem[1]} />
                </View>
              </ListItem>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* <Fab
        active={true}
        direction='up'
        containerStyle={{}}
        style={{ backgroundColor: Colors.ACCENT }}
        position='bottomRight'
        onPress={() => this.setState({ active: !this.state.active })}>
        <Icon name='plus' color={Colors.WHITE} group='ui-interface' />
      </Fab> */}
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
