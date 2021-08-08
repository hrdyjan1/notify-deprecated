import AsyncStorage from '@react-native-async-storage/async-storage';

const saveStorageData = async (key: string, value: string | Object) => {
  const stringValue = JSON.stringify(value);
  try {
    await AsyncStorage.setItem(key, stringValue);
  } catch (e) {
    throw new Error(
      `Unabled to save to storage value=${stringValue} to key=${key}`,
    );
  }
};

const getStorageData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw new Error(`Unabled to get from storageKey=${key}`);
  }
};

export {saveStorageData, getStorageData};
