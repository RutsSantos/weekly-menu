import React, {useEffect, useState} from "react";
import { View, StyleSheet } from "react-native";
import { Thumbnail } from "native-base";
import { CommonActions } from '@react-navigation/native';
import Colors from "../constants/Colors";
import { Title, SubTitle, ContentText } from "../components/Text";
import Button from "../components/Button";
import {
  removeValue,
  getData,
} from "../utils/Helpers";
import {Storage} from "../constants/Storage";

export default function Profile({navigation}) {
  const [user, setUser] = useState({})
  useEffect(()=>{
    getData(Storage.USER).then((user)=>{
      setUser(user);
    })
  },[]);

  const closeSession = ()=>{
    removeValue(Storage.USER)
    .then(()=>{
      console.warn("Sesion cerrada")
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'Login' }
          ],
        })
      );
    })
  }
  return (
    <View style={styles.container}>
      <View style={{ width: "60%" }}>
        <Title text='Infomación de usuario' />
      </View>
      <View style={styles.margin}>
        <Thumbnail
          style={{
            height: 170,
            width: 170,
            borderRadius: 100,
            alignSelf: "center",
          }}
          source={require("../assets/img/salad.jpg")}
        />
        <View style={styles.margin}>
          <SubTitle text={user.name} />
          <View style={styles.margin}>
            <ContentText text='Correo:' />
            <ContentText text={user.email} />
            <ContentText text='Miembro desde:' />
            <ContentText text={user.name} />
          </View>

          <View style={styles.margin}>
            <Button text='Cerrar sesión' outlined onClick={()=> closeSession()} />
            <ContentText text='Cambiar contraseña' color={Colors.PRIMARY} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
    paddingHorizontal: 30,
    paddingTop: 110,
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
  margin: {
    marginTop: 40,
    alignItems: "center",
  },
});
