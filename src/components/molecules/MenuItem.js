import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../atoms/Button';
import styles from '../../style/StyleMenuItem'; // Crearás este archivo de estilos

const MenuItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <View style={styles.container}>
            <Button title={title} onPress={() => setIsOpen(!isOpen)} />
            {isOpen && <View style={styles.content}>{content}</View>}
        </View>
    );
};
export default MenuItem;