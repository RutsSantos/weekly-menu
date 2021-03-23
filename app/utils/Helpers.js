import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log("stored")
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
    console.error(e);
  }
};

export const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }

  console.log("Done.");
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

  daysOfWeek.map((day) => {
    const n = foodlist[0].desayunos.length;
    const rand = Math.floor(Math.random() * n);
    let newObject = {
      breakfast: foodlist[0].desayunos[rand],
      lunch: foodlist[1].almuerzos[rand],
      dinner: foodlist[2].cenas[rand],
    };
    weekMenu.push({ [day]: newObject });
  });
  return weekMenu;
}
