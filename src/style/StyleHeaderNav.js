import { StyleSheet } from 'react-native';
// Estilos para el encabezado
const styles = StyleSheet.create({
    navContainer: {
        position: 'absolute',  // Para fijar en la parte inferior
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,            // Ajusta la altura de la botonera
        backgroundColor: '#34495e',
        flexDirection: 'row',  // Coloca los botones en línea
        justifyContent: 'space-around',  // Espacia los botones de manera uniforme
        alignItems: 'center',  // Centra los botones verticalmente
    },
    navButton: {
        padding: 10,
    },
    navText: {
        color: '#fff',
        fontSize: 16,
    },
});
export default styles;