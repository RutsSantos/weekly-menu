import firestore from "@react-native-firebase/firestore";
import {randomCreator, storeData} from '../Helpers';
import {Storage} from '../../constants/Storage';

export async function getUsers (){
  var users = [];
  await firestoreRequest("users", users).then((data)=>{
    data !=null && storeData(Storage.USERS, data);
  });
  return users;
}

export async function getFoodItem() {
  var foodlist = [];
  const [breakfast, meal, dinner] = [[], [], []];
  await firestoreRequest("desayunos", breakfast, foodlist);
  await firestoreRequest("almuerzos", meal, foodlist);
  await firestoreRequest("cenas", dinner, foodlist);
  const week = randomCreator(foodlist);
  storeData("WEEK_MENU", week);
  return week;
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
