
import { StyleSheet } from 'react-native';
import { COLORS } from '@config/colors';
import { FontFamily, FontSize } from '@config/fonts';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primaryBlue,
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  text: {
    color: COLORS.white,
    fontFamily: FontFamily.ftFamily_Roboto_Regular,
    fontSize: FontSize.ftSize_16,
    fontWeight: '500',
  },
});

export default styles;