import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
    title: string;
    alignment?: "left" | "center" | "right";
}

const LandingSubTitle: React.FC<Props> = ({ title, alignment = 'left' }) => {
    return (
        <View style={styles.landingSubTitlecontainer}>
            <Text style={[styles.landingSubTitleCaption, { textAlign: alignment }]}>{title}</Text>
        </View>
    );
};

export default LandingSubTitle;