import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../molecules/NavBar'; // Importamos la barra de navegación
import styles from '../../style/StyleHeaderNav';
// HeaderNav combina el título de la app con la barra de navegación
const HeaderNav = ({ navigation }) => {
    return (
        <View style={styles.header}>
            {/* Título de la app */}
            <Text style={styles.title}>My App</Text>
            {/* Barra de navegación */}
            <NavBar navigation={navigation} />
        </View>
    );
};
export default HeaderNav;
