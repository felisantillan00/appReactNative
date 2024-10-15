import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,  // Ocupa la mayor parte del espacio de la pantalla
        paddingTop: 3,  // Añade espacio entre la parte superior y el carrusel
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});
export default styles;