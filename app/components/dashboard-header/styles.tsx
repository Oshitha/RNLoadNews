import { StyleSheet } from 'react-native';
import { FontFamily, FontSize } from '../../config/fonts';
import { COLORS } from '../../config/colors';

const styles = StyleSheet.create({

    dashboardContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    dashboardCaption: {
        fontSize: FontSize.ftSize_32,
        fontFamily: FontFamily.ftFamily_Roboto_Medium,
        fontWeight: "900",
        color: COLORS.white,
    }
});

export default styles;