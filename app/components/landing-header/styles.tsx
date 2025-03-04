import { StyleSheet } from 'react-native';
import { FontFamily, FontSize } from '../../config/fonts';

const styles = StyleSheet.create({

    landingContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    landingCaption: {
        fontSize: FontSize.ftSize_30,
        fontFamily: FontFamily.ftFamily_Roboto_Medium,
        fontWeight: "700",
    }
});

export default styles;