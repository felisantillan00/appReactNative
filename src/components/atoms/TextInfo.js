import React from 'react';
import {Text} from 'react-native';
import styles from '../../style/StyleTextInfo';

const TextInfo = ({ label, value }) => {
    return (
        <Text style={styles.text}>
            {label} {value}
        </Text>
    );
};
export default TextInfo;