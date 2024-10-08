import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavButton from '../atoms/NavButton'; // Importamos el átomo NavButton

// NavBar es una molécula que junta varios botones y organiza su distribución en la pantalla.
const NavBar = ({ navigation }) => {
    return (
        <View style={styles.navbar}>
            {/* Creamos dos botones que navegan a las pantallas Home y About */}
            <NavButton title="En venta" onPress={() => navigation.navigate('enVenta')} />
            <NavButton title="En alquiler" onPress={() => navigation.navigate('About')} />
            <NavButton title="Acceder" onPress={() => navigation.navigate('About')} />
        </View>
    );
};

// Estilos para organizar la barra de navegación
const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row', // Los botones se organizan en una fila
        justifyContent: 'space-around', // Los botones se distribuyen de manera uniforme
        padding: 10, // Espaciado interno
        backgroundColor: '#2c3e50', // Color de fondo oscuro
    },
});

export default NavBar;
