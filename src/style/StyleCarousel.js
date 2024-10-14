// // Cambiar en los archivos de estilos
// import {Dimensions} from 'react-native';
// import {StyleSheet} from 'react-native';
// const MAX_WIDTH = Dimensions.get('screen').width;

// // Estilos del Image
// const styles = StyleSheet.create({
//     imageContainer: {
//         width: MAX_WIDTH, // Ajusta según tu diseño
//         height: 200, // Ajusta según tu diseño
//     },
//     image: {
//         width: '100%',
//         height: '100%',
//         resizeMode: 'cover', // Ajusta según sea necesario
//     },
// });
// export default styles;
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

