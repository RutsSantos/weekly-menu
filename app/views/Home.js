import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import {Storage} from "../constants/Storage";
import { Title, SubTitle } from "../components/Text";
import { Cards } from "../components/Card";
import ActionButton from "../components/ActionButton";
import { DayMeal, ColorCode } from "../components/DayMeal";
import Icon from "react-native-ico";
import {
  getTodayMenu,
  daysOfWeek,
  getTodayNumber,
  getData,
} from "../utils/Helpers";

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [todayMenu, setTodayMenu] = useState([]);
  const [name, setName] = useState("");
  useEffect(()=>{
    getData(Storage.USER).then((data)=>setName(data.name));
  },[])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",

              marginTop: 122,
              marginHorizontal: 40,
            }}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={{ alignSelf: "flex-end" }}>
                <Icon
                  name='close-button'
                  color={Colors.ACCENT}
                  group='material-design'
                />
              </TouchableOpacity>
              <SubTitle size={22} color={Colors.PRIMARY} text='Menú de hoy' />
              <SubTitle
                size={18}
                color={Colors.SECONDARY}
                text={daysOfWeek[getTodayNumber()]}
              />
              <ColorCode />
              {Object.keys(todayMenu).length ? (
                <DayMeal dayFoodList={todayMenu} />
              ) : null}
            </View>
          </View>
        </Modal>
        <SubTitle text='Welcome back!' color={Colors.ACCENT} size={22} />
        <Title text={name} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 40,
          }}>
          <ActionButton
            text='Hoy'
            iconName='calendar'
            onClick={async () => {
              setModalVisible(true);
              getTodayMenu().then((data) => {
                setTodayMenu(data);
              });
            }}
          />
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
          content='Verifica con antelación el menú del día, para que puedas preparar a tiempom tus alimentos'
        />
        <Cards
          background={Colors.PRIMARY}
          color={Colors.WHITE}
          title='Agregar platillo al menú'
          content='Por el momento esta es una opción deshabilitada.'
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
  modalContent: {
    backgroundColor: Colors.WHITE,
    height: "72%",
    width: "100%",
    padding: 30,
    paddingVertical: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
