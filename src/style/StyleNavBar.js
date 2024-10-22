import { StyleSheet } from 'react-native';
// Estilos para organizar la barra de navegación
const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#87CEEB', // Color celeste para la barra
        borderTopWidth: 0,
        borderColor: '#ccc',
        alignItems: 'center',
        height: 80,
        width: '100%', // Asegúrate de que ocupe el 100% del ancho
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