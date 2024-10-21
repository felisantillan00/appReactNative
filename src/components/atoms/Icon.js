import React from 'react';
import { Image, Dimensions } from 'react-native';
import styles from '../../style/StylesIcon'; // Asegúrate de que la ruta sea correcta

const Icon = ({ source }) => { // Recibimos el 'source' como un prop
    const { width } = Dimensions.get('window');
    const iconSize = width * 0.05; // 8% del ancho de la pantalla
    return (
        <Image
            source={source} // Usamos la imagen que pasamos como parámetro
            style={[styles.icon, { width: iconSize, height: iconSize }]}
        />
    );
};
export default Icon;