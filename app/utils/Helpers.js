import AsyncStorage from "@react-native-async-storage/async-storage";
import { Storage } from "../constants/Storage";

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
    console.error(e);
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.error("Error fetching data", e);
  }
};

export const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};

export const daysOfWeek = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export function randomCreator(foodlist) {
  const weekMenu = [];
  const breakfastLength = foodlist[0].desayunos.length;
  const lunchLength = foodlist[1].almuerzos.length;
  const dinnerLength = foodlist[2].cenas.length;

  daysOfWeek.map((day) => {
    const n = foodlist[0].desayunos.length;
    const rand = Math.floor(Math.random() * n);
    let newObject = {
      breakfast: foodlist[0].desayunos[randomFactor(breakfastLength)],
      lunch: foodlist[1].almuerzos[randomFactor(lunchLength)],
      dinner: foodlist[2].cenas[randomFactor(dinnerLength)],
    };
    weekMenu.push({ [day]: newObject });
  });
  return weekMenu;
}

function randomFactor(len) {
  return Math.floor(Math.random() * len);
}

export function getTodayNumber() {
  return new Date().getDay() - 1;
}

export async function getTodayMenu() {
  const today = getTodayNumber();
  let menu = await getData(Storage.WEEK_MENU);
  menu = menu[today];
  return menu[daysOfWeek[today]];
}

export function createShoppingList(week) {
  const elements = [];
  let count = {};
  week.map((day, key) => {
    let d = daysOfWeek[key];
    Object.entries(day[d]).map((item) => {
      if (item[1].ingredients != undefined) {
        item[1].ingredients.forEach((ingredient) => {
          elements.push(ingredient);
        });
      }
    });
  });

  elements.forEach((x) => {
    count[x] = (count[x] || 0) + 1;
  });
  const eso = Object.entries(count)
  let newArray = [];
  eso.map((elem)=>{
    console.log(elem)
    elem.push({checked: false})
    newArray.push(elem)
  })
  console.log(newArray)
  return newArray;
}
