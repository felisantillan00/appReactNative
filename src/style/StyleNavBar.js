import { StyleSheet } from 'react-native';
// Estilos para organizar la barra de navegación
const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row', // Alinear los botones en una fila
        justifyContent: 'space-around', // Espacio uniforme entre los botones
        paddingVertical: 10, // Separación superior e inferior
        backgroundColor: '#87CEEB', // Aseguramos que el fondo sea blanco si lo necesitas
        borderTopWidth: 1, // Si deseas agregar un borde en la parte superior
        borderColor: '#ccc', // Color del borde
        alignItems: 'center', // Centrar verticalmente
        overflow: 'hidden',    // Asegura que el contenido no sobresalga de las esquinas redondeadas
        height: 75,
        paddingHorizontal: 10
    },
    navButtonContainer: {
        alignItems: 'center',
    },
    label: {
        color: '#ffffff', // Color normal del texto
        fontSize: 15,
        marginTop: 4,
    },
    activeLabel: {
        color: '#FFD700', // Color del texto activo (resaltado)
        fontSize: 15,
        marginTop: 4,
        fontWeight: 'bold',
    },
    activeButton: {
        borderTopWidth: 3,
        borderTopColor: '#FFD700', // Resaltar el botón activo con una línea
    }
});
export default styles;