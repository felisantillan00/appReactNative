import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from '../../style/StyleFloatingButton';

const FloatingButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
            <Image source={require('../../img/Contacto.png')} style={styles.icon} />
        </TouchableOpacity>
    );
};
export default FloatingButton;