import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorageData = async (key: string, data: any) => {
  if (typeof data !== 'string') data = JSON.stringify(data);
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    // Error retrieving data
    console.log('Error: ', error.message);
  }
};

export async function getStorageData(key: string, isJson = false) {
  let data: any;
  try {
    data = (await AsyncStorage.getItem(key)) || null;
  } catch (error) {
    // error reading value
    console.log('Error: ', error.message);
  }
  if (isJson) data = data != null ? JSON.parse(data) : null;
  return data;
}

export const deleteStorageData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    // Error retrieving data
    console.log('Error: ', error.message);
  }
}