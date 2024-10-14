import { StyleSheet } from 'react-native';
// Estilos para organizar la barra de navegación
const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row', // Alinear los botones en una fila
        justifyContent: 'space-around', // Espacio uniforme entre los botones
        alignItems: 'center', // Centrar verticalmente
        paddingVertical: 10, // Separación superior e inferior
        backgroundColor: '#fff', // Aseguramos que el fondo sea blanco si lo necesitas
        borderTopWidth: 1, // Si deseas agregar un borde en la parte superior
        borderColor: '#ccc', // Color del borde
    },
});
export default styles;