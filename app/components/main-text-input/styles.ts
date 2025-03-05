import { StyleSheet } from 'react-native';
import { FontSize } from '@config/fonts';
import { COLORS } from '@config/colors';

const styles = StyleSheet.create({

    textInputcontainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    textInput: {
        height: 46,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        fontSize: FontSize.ftSize_16,
        marginBottom: 20,
        color: COLORS.black,

    }
});

export default styles;