import {StyleSheet, Dimensions} from 'react-native';
const MAX_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    imageContainer: {
        width: MAX_WIDTH,
        height: 200,
        overflow: 'hidden', // Asegura que la imagen no sobresalga
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
    },
    image: {
        width: '100%', // Asegura que la imagen se ajuste al contenedor
        height: '100%', // Asegura que la imagen se ajuste al contenedor
        resizeMode: 'cover', // O 'contain' si prefieres que la imagen no sobresalga
    },
    indicatorContainer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        zIndex: 1,
    },
    buttonLeft: {
        position: 'absolute',
        top: '50%',
        left: 10, // Ajusta según necesites
        transform: [{ translateY: -25 }], // Ajusta la posición vertical
        zIndex: 2,
    },
    buttonRight: {
        position: 'absolute',
        top: '50%',
        right: 10, // Ajusta según necesites
        transform: [{ translateY: -25 }], // Ajusta la posición vertical
        zIndex: 2,
    },
    buttonImage: {
        width: 30, // Ajusta el tamaño de la imagen del botón
        height: 30,
    },
});
export default styles;