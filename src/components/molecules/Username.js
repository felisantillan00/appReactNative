import React from 'react';
import {StyleSheet} from 'react-native';
import Text from '../atoms/TextInfo'

const Username = ({ name }) => {
    return (
        <Text style={styles.username}>{name}</Text>
    );
};

const styles = StyleSheet.create({
    username: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
    },
});

export default Username;
