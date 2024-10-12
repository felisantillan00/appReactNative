import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderNav from '../components/organisms/HeaderNav'; // Importamos el encabezado

// EnAlquiler es la pantalla principal
const EnAlquiler = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Mostramos el encabezado y pasamos el navigation para la barra de navegación */}
            <HeaderNav navigation={navigation} />
            {/* Contenido de la pantalla */}
            <Text style={styles.content}>This is the Home Screen</Text>
        </View>
    );
};

// Estilos para la pantalla Home
const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa todo el espacio disponible en la pantalla
    },
    content: {
        textAlign: 'center', // Centra el texto
        fontSize: 20, // Tamaño de la fuente
        marginTop: 20, // Separación superior
    },
});

export default EnAlquiler; // Asegúrate de exportar con la letra mayúscula

