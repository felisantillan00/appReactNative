import { StyleSheet, Dimensions } from 'react-native';
const MAX_WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff', // Color de fondo
    },
    profileContainer: {
        flexDirection: 'row', // Para colocar la foto y los botones en fila
        alignItems: 'center', // Centrar verticalmente
        marginBottom: 20, // Espacio debajo del contenedor
    },
    buttonContainer: {
        marginLeft: 20, // Espacio entre la imagen y los botones
        justifyContent: 'center', // Centra los botones verticalmente
    },
    button: {
        backgroundColor: '#007BFF', // Color de fondo de los botones
        padding: 10,
        borderRadius: 5,
        marginVertical: 5, // Espacio entre los botones
    },
    selfieButton: {
        // Estilos específicos para el botón "Sacar selfie"
    },
    modifyButton: {
        // Estilos específicos para el botón "Modificar foto"
    },
    signOutButton: {
        // Otros estilos para el botón de cerrar sesión
    },
    addPropertyButton: {
        // Otros estilos para el botón de agregar propiedad
    },
    buttonText: {
        color: '#ffffff', // Color del texto de los botones
        textAlign: 'center',
    },
});
export default styles;