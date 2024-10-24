// Email.js
import React from 'react';
import {StyleSheet} from 'react-native';
import Text from '../atoms/TextInfo'

const Email = ({ email }) => {
    return (
        <Text style={styles.email}>{email}</Text>
    );
};

const styles = StyleSheet.create({
    email: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
});

export default Email;
