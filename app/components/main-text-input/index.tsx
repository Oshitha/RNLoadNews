import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { COLORS } from '@config/colors';

interface Props {
    placeholder: string;
    maxLength: number;
    value: string;
    onChangeText: (text: string) => void;
}

const MainTextInput: React.FC<Props> = ({ placeholder, maxLength, value, onChangeText }) => {
    return (
        <View style={styles.textInputcontainer}>
            <TextInput style={styles.textInput} placeholder={placeholder} placeholderTextColor={COLORS.gray} maxLength={maxLength} onChangeText={onChangeText} value={value} />
        </View>
    );
};

export default MainTextInput;