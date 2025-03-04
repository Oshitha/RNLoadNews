import { StyleSheet } from 'react-native';
import { COLORS } from '../../config/colors';
import { FontFamily, FontSize } from '../../config/fonts';

const styles = StyleSheet.create({

    notificationTopContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        paddingHorizontal: 20,
        backgroundColor: COLORS.white
    },
    notificationDetailViewContainer: {
        width: '100%',
        height: '90%',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    notificationContainer: {
        backgroundColor: COLORS.white,
        width: '100%',
        height: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    notificationItemView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    notificationTitle: {
        fontSize: FontSize.ftSize_24,
        fontFamily: FontFamily.ftFamily_Roboto_Medium,
        fontWeight: '700'
    },
    notificationViewContainer: {
        marginTop: 20,
    },
    notificationButtonContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    notificationIcon: {
        width: 98,
        height: 98
    }
});

export default styles;