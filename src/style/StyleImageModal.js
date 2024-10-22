import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fondo oscuro semi-transparente
    },
    modalCloseButton: {
        position: 'absolute',
        top: 40,
        right: 30,
        zIndex: 1000, // Asegúrate de que esté por encima de la imagen
    },
    modalCloseText: {
        fontSize: 24,
        color: 'white',
    },
    modalImage: {
        width: '100%',
        height: '80%', // Ajustar la altura
    },
    leftArrow: {
        position: 'absolute',
        left: 20,
        top: '50%',
        zIndex: 1000,
    },
    rightArrow: {
        position: 'absolute',
        right: 20,
        top: '50%',
        zIndex: 1000,
    },
    arrowText: {
        fontSize: 30,
        color: 'white',
    },
});
export default styles;