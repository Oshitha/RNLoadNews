import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './styles';
import LandingHeader from './components/landing-header';
import LandingSubTitle from './components/landing-sub-title';
import MainTextInput from './components/main-text-input';
import { saveUser, getUser } from './utils/storage';
import { useRouter } from 'expo-router';
import { CONSTANT } from './utils/constant';

export default function Index() {

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      if (user) {
        setFName(user.firstName);
        setLName(user.lastName);
      }
    };
    loadUser();
  }, []);

  const handleSave = async () => {
    await saveUser({ firstName: fName, lastName: lName });
  };

  const navigateToNotificationsView = async () => {
    if (!fName.trim() && !lName.trim()) {
      return;
    }
    await handleSave();
    router.push('/screens/notifications/notifications');
  }


  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView>
        <View style={styles.landingViewContainer}>
          <LandingHeader title={CONSTANT.LAST_NAME} />
          <View style={styles.landingViewSubTitleContainer}>
            <LandingSubTitle title={CONSTANT.CREATE_YOUR_ACCOUNT} />
          </View>
          <View style={styles.fNameView}>
            <MainTextInput placeholder={CONSTANT.FIRST_NAME} maxLength={20} onChangeText={setFName} value={fName} />
          </View>
          <View style={styles.fNameView}>
            <MainTextInput placeholder={CONSTANT.LAST_NAME} maxLength={30} onChangeText={setLName} value={lName} />
          </View>

          <View style={styles.nextIcon}>
            <TouchableOpacity onPress={() => navigateToNotificationsView()}>
              <Image style={styles.nextImg} source={!fName.trim() || !lName.trim() ? require('@/assets/images/next-inactive.png') : require('@/assets/images/nextIcon.png')} />
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}
