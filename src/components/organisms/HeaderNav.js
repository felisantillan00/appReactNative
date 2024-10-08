import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '../molecules/NavBar'; // Importamos la barra de navegación

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

// Estilos para el encabezado
const styles = StyleSheet.create({
    header: {
        paddingTop: 40, // Espacio en la parte superior (útil para separar de la barra de estado)
        backgroundColor: '#34495e', // Color de fondo para el encabezado
    },
    title: {
        fontSize: 24, // Tamaño de la fuente del título
        color: '#fff', // El color del texto es blanco
        textAlign: 'center', // El título está centrado
        padding: 10, // Espaciado alrededor del título
    },
});

export default HeaderNav;
