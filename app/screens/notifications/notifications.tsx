import React, { memo, useEffect } from 'react';
import { View, Text, Platform, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './styles';
import LandingSubTitle from '@/app/components/landing-sub-title';
import ContinueButton from '@/app/components/continue-button';
import { useRouter } from 'expo-router';
import * as Notification from "expo-notifications";
import { CONSTANT } from '@/app/utils/constant';

const Notifications = () => {

    const router = useRouter();

    const requestUserPermission = async (): Promise<boolean> => {
        try {
            // Request notification permissions
            const { status } = await Notification.requestPermissionsAsync();

            if (status == "granted") {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Error requesting notification permission:', error);
            return false;
        }
    };

    return (
        <SafeAreaProvider>
            <View style={styles.notificationTopContainer}>
                <View style={styles.notificationDetailViewContainer}>
                    <View style={styles.notificationContainer}>
                        <View style={styles.notificationItemView}>
                            <Image style={styles.notificationIcon} source={require('@/assets/images/notifications.png')} />
                            <View style={styles.notificationViewContainer}>
                                <Text style={styles.notificationTitle}>{CONSTANT.GET_MOST_OUT_OF_BLOTT}</Text>
                            </View>
                            <View style={styles.notificationViewContainer}>
                                <LandingSubTitle title={CONSTANT.ALLOW_NOTIFICATIONS} alignment='center' />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.notificationButtonContainer}>
                    <ContinueButton title={CONSTANT.CONTINUE} onPress={async () => {
                        await requestUserPermission()
                        router.push('../dashbaord/dashboard');
                    }} />
                </View>
            </View>
        </SafeAreaProvider>
    )
}

export default Notifications;