import React from 'react';
import {View} from 'react-native';
import NavBar from '../molecules/NavBar'; // Importamos la barra de navegación
import styles from '../../style/StyleHeaderNav';
// HeaderNav combina el título de la app con la barra de navegación
const HeaderNav = ({ navigation }) => {
    return (
        <View style={styles.header}>
            {/* Barra de navegación */}
            <NavBar navigation={navigation} />
        </View>
    );
};
export default HeaderNav;
