import firestore from "@react-native-firebase/firestore";
import {
  randomCreator,
  storeData,
  getData,
  createShoppingList,
} from "../Helpers";
import { Storage } from "../../constants/Storage";

export function addUser(user) {
  //Adds user to firebase
  firestore()
    .collection("users")
    .doc(user.email)
    .set({
      name: user.name,
      email: user.email,
      password: user.password,
      date_join: firestore.FieldValue.serverTimestamp(),
    })
    .then(() => console.log("User added!"));
}

export function authenticateUser(userId, password, navigation) {
  //Authenticate the user on Login
  getData(Storage.USERS).then((data) => {
    data.forEach((elem) => {
      if (elem.email === userId && elem.password === password) {
        elem.week_menu &&
          storeData(Storage.WEEK_MENU, elem.week_menu).then(() =>
            console.log("Semana agregada desde firebase"),
          );
        elem.shopping_list &&
          storeData(Storage.SHOPPING, elem.shopping_list).then(() =>
            console.log("Shopping List agregado desde firebase"),
          );
        storeData(Storage.USER, elem).then(() =>
          navigation.navigate("AppHome"),
        );
        return true;
      }
    });
  });
}

export async function getUsers() {
  //gets the user from firebase and store it on the local storage
  var users = [];
  await firestoreRequest("users", users).then((data) => {
    data != null && storeData(Storage.USERS, data);
  });
  return users;
}

export async function getFoodItem() {
  //Get the list of food and transforme it in a random array of food per week
  var foodlist = [];
  const [breakfast, meal, dinner] = [[], [], []];
  await firestoreRequest("desayunos", breakfast, foodlist);
  await firestoreRequest("almuerzos", meal, foodlist);
  await firestoreRequest("cenas", dinner, foodlist);
  const week = randomCreator(foodlist);
  await storeData(Storage.WEEK_MENU, week);
  const user = await getData(Storage.USER);
  const shopping = createShoppingList(week);
  await storeData(Storage.SHOPPING, shopping);
  addUserMenu(user.email, week, shopping);
  return week;
}

export function addUserMenu(userId, menu, shopping) {
  // Updates a given user and adds it's semanal menu
  firestore()
    .collection("users")
    .doc(userId)
    .update({
      week_menu: menu,
      shopping_list: shopping,
    })
    .then(() => {
      console.info("Menu Updated!");
    });
}

async function firestoreRequest(collection, array, foodList) {
  await firestore()
    .collection(collection)
    .get()
    .then((documentSnapshot) => {
      documentSnapshot.forEach((doc) => {
        array.push(doc.data());
      });
    });
  foodList && foodList.push({ [collection]: array });
  return array;
}

export async function updateShoppingList(list) {
  const user = await getData(Storage.USER).then((usr) => {
    return usr;
  });
  await firestore()
    .collection("users")
    .doc(user.email)
    .update({
      shopping_list: list,
    });
}
