import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ProcedimientosMenu from '../components/organisms/ProcedimientosMenu'; // Organismo

const Procedimientos = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ProcedimientosMenu />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f0f0', // Un color claro para asegurar visibilidad
        paddingBottom: 0, // Agrega un padding en la parte inferior
    },
});

export default Procedimientos;

