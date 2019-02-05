import { AsyncStorage } from 'react-native';

export const login = async (username) => {
  try {
    await AsyncStorage.multiSet([['loggedIn', 'true'], ['username', username]]);
  } catch (e) {
    console.log(e);
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.multiSet([['loggedIn', 'false'], ['username', '']]);
  } catch (e) {
    console.log(e);
  }
};

export const isLoggedIn = async () => {
  try {
    const value = await AsyncStorage.getItem('loggedIn');
    return value;
  } catch (e) {
    console.log(e);
  }
};

export const getUsername = async () => {
  try {
    const value = await AsyncStorage.getItem('username');
    return value;
  } catch (e) {
    console.log(e);
  }
};

export const clear = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};
