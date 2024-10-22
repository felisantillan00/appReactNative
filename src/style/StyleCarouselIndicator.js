import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    indicatorContainer: {
        position: 'absolute',
        bottom: 10, // Ajusta la distancia del borde inferior
        left: 0,
        right: 0,
        flexDirection: 'row', // Para alinear los indicadores horizontalmente
        justifyContent: 'center', // Centra los indicadores
    },
    indicator: {
        width: 10, // Ancho del indicador
        height: 10, // Alto del indicador
        borderRadius: 5, // Lo hace circular
        backgroundColor: 'gray', // Color inactivo
        marginHorizontal: 5, // Espacio entre indicadores
    },
    activeIndicator: {
        backgroundColor: 'blue', // Color activo
    },
});
export default styles;