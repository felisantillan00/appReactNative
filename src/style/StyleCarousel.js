import { StyleSheet, Dimensions } from 'react-native';
const MAX_WIDTH = Dimensions.get('screen').width;

export default StyleSheet.create({
    imageContainer: {
        width: MAX_WIDTH, // Ajusta según tu diseño
        height: 200, // Ajusta según tu diseño
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: MAX_WIDTH,
        height: 200,
        resizeMode: 'cover', // Ajusta la imagen al contenedor manteniendo la relación de aspecto
    },
});