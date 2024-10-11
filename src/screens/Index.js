import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderNav from '../components/organisms/HeaderNav'; // Importamos el encabezado
import styles from '../style/StyleIndex';
// Index es la pantalla principal
const Index = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Mostramos el encabezado y pasamos el navigation para la barra de navegación */}
            <HeaderNav navigation={navigation} />
            {/* Contenido de la pantalla */}
            <Text style={styles.content}>This is the Home Screen</Text>
        </View>
    );
};
export default Index; // Asegúrate de exportar con la letra mayúscula

