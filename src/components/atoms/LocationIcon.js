import React from 'react';
import { Image, Dimensions } from 'react-native';
import styles from '../../style/StylesLocationIcon'; // Asegúrate de que la ruta sea correcta

const LocationIcon = () => {
    const { width } = Dimensions.get('window');
    const iconSize = width * 0.05; // 5% del ancho de la pantalla
    return (
        <Image
            source={require('../../img/UbicacionDark.png')}
            style={[styles.icon, { width: iconSize, height: iconSize }]}
        />
    );
};
export default LocationIcon;