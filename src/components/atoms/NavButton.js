import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// NavButton es un botón reutilizable. Recibe un título (texto del botón) y una función onPress (qué hacer cuando el botón es presionado).
const NavButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {/* El texto del botón se muestra aquí */}
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

// Estilos del botón
const styles = StyleSheet.create({
    button: {
        padding: 10, // Espaciado interno del botón
        backgroundColor: '#3498db', // Color de fondo azul
        borderRadius: 5, // Bordes redondeados
    },
    text: {
        color: '#fff', // El texto es blanco
        fontSize: 16, // Tamaño de la fuente
    },
});

export default NavButton; // Exportamos el componente para usarlo en otros lugares
