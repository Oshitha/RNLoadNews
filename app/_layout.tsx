import { Stack } from "expo-router";
import Toast from "react-native-toast-message";
import { getUser } from '@utils/storage';
import { useState, useEffect } from "react";
import { useRouter } from 'expo-router';
import { CONSTANT } from '@utils/constant';

export default function RootLayout() {

  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await getUser();
        if (user) {
          // Proceed to navigate directly here if user exists
          router.replace('./screens/dashbaord/dashboard');
        }
      } catch (error) {
        Toast.show({
          type: "error",
          text1: CONSTANT.ERROR,
          text2: CONSTANT.SOME_THING_WENT_WRONG
        });
      }
    };

    loadUser();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="dashboard" />
    </Stack>
  )
}

