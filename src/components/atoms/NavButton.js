import { Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../style/StyleNavButton';

// NavButton es un botón reutilizable. Recibe una imagen (imageSource), un título (texto del botón), y una función onPress (qué hacer cuando el botón es presionado).
const NavButton = ({ imageSource, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {/* Mostramos la imagen del botón */}
            <Image source={imageSource} style={styles.image} />
        </TouchableOpacity>
    );
};

export default NavButton; // Exportamos el componente para usarlo en otros lugares
