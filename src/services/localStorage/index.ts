import AsyncStorage from '@react-native-community/async-storage';

export const storeItem = async (key: string, value: object | string | number | boolean): Promise<AsyncStorageResponse> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify({ data: value }));
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

export const getItem = async (key: string): Promise<AsyncStorageResponse> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return {
        success: true,
        value: JSON.parse(value),
      };
    }
    return {
      success: true,
      value: { data: null },
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

export const clearItem = async (key: string): Promise<AsyncStorageResponse> => {
  try {
    await AsyncStorage.removeItem(key);
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

export const clearAllItems = async (): Promise<AsyncStorageResponse> => {
  try {
    await AsyncStorage.clear();
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};
