import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
    title: string;
}

const LandingHeader: React.FC<Props> = ({ title }) => {
    return (
        <View style={styles.landingContainer}>
            <Text style={styles.landingCaption}>{title}</Text>
        </View>
    );
};

export default LandingHeader;