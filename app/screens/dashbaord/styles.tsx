import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '@config/colors';
import { FontFamily, FontSize } from '@config/fonts';

const styles = StyleSheet.create({

    dashbaordContainer: {
        flexDirection: 'column',
        backgroundColor: COLORS.dashboardBlack,
        paddingHorizontal: 20,
        height: '100%',
        width: '100%'
    },
    dashboardSubContainer: {
        marginTop: Platform.OS === 'ios' ? 65 : 20,
        backgroundColor: COLORS.dashboardBlack
    },
    errorMsg: {
        color: COLORS.white,
        fontSize: FontSize.ftSize_16,
        fontFamily: FontFamily.ftFamily_Rubik_Medium,
        paddingTop:30
    },
    fList: {
        marginTop: 30
    }

});

export default styles;