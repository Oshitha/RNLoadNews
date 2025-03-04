import { StyleSheet } from 'react-native';
import { FontFamily, FontSize } from '../../config/fonts';
import { COLORS } from '../../config/colors';

const styles = StyleSheet.create({

    landingSubTitlecontainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    landingSubTitleCaption: {
        fontSize: FontSize.ftSize_16,
        fontFamily: FontFamily.ftFamily_Roboto_Regular,
        fontWeight: "400",
        color: COLORS.gray,
        textAlign: 'left',
    }
});

export default styles;