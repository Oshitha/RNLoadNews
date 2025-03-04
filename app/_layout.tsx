import { Stack } from "expo-router";
import { getUser } from './utils/storage';
import { useState, useEffect } from "react";
import { useRouter } from 'expo-router';
export default function RootLayout() {

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {

    const loadUser = async () => {
      const user = await getUser();
      if (user) {
        setIsLoading(true)
      }
    };

    loadUser();
    if (isLoading) {
      router.replace('./screens/dashbaord/dashboard');
    }

  }, [isLoading]);

  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="dashboard" />
    </Stack>
  )
}

