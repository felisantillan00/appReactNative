import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../style/StylePill';

const Pill = ({ label, color }) => {
    return (
        <View style={[styles.pill, { backgroundColor: color }]}>
            <Text style={styles.pillText}>{label}</Text>
        </View>
    );
};
export default Pill;
