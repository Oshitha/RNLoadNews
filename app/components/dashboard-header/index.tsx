import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
    title: string;
}

const DashboardHeader: React.FC<Props> = ({ title }) => {
    return (
        <View style={styles.dashboardContainer}>
            <Text style={styles.dashboardCaption}>{title}</Text>
        </View>
    );
};

export default DashboardHeader;