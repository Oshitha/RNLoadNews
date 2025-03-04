import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
    firstName: string;
    lastName: string;
}

const USER_STORAGE_KEY = 'user_data';

export const saveUser = async (user: User): Promise<void> => {
    try {
        const jsonValue = JSON.stringify(user);
        await AsyncStorage.setItem(USER_STORAGE_KEY, jsonValue);
    } catch (error) {
        throw error;
    }
};

export const getUser = async (): Promise<User | null> => {
    try {
        const jsonValue = await AsyncStorage.getItem(USER_STORAGE_KEY);
        return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
        throw error;
    }
};