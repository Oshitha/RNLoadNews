import { StyleSheet } from 'react-native';
import { FontFamily, FontSize } from '@config/fonts';
import { COLORS } from '@config/colors';

const styles = StyleSheet.create({

    newsCardContainer: {
        flexDirection: 'row',
        paddingBottom: 20
    },
    newsImageView: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    newsImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    },
    newsDescriptionView: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10,
        width: '69%'
    },
    source: {
        fontFamily: FontFamily.ftFamily_Rubik_Light,
        fontSize: FontSize.ftSize_12,
        fontWeight: "400",
        textTransform: 'uppercase',
        color: COLORS.white,
        paddingBottom: 10
    },
    headLine: {
        fontFamily: FontFamily.ftFamily_Roboto_Medium,
        fontSize: FontSize.ftSize_20,
        fontWeight: "500",
        color: COLORS.white,
    }
});

export default styles;