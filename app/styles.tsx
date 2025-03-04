import { StyleSheet, Platform } from 'react-native';
import { COLORS } from './config/colors';

const styles = StyleSheet.create({

    landingViewContainer: {
        backgroundColor: COLORS.white,
        width: '100%',
        height: '100%',
        paddingTop: Platform.OS === 'ios' ? 60 : 20,
        paddingHorizontal: 30
    },
    landingViewSubTitleContainer: {
        paddingVertical: 30
    },
    fNameView: {
        width: '100%'
    },
    nextIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 80,
    },
    nextImg: {
        width: 56,
        height: 56
    },
});

export default styles;