// components/atoms/Text.js
import {Text} from 'react-native';
import React from 'react';
import styles from '../../style/StyleText';

const Text = ({ children, style}) => {
    return <Text style={[styles.text, style]}>{children}</Text>;
};
export default Text;
