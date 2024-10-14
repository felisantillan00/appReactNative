import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',  // Para que el contenido esté en la parte superior
        backgroundColor: '#f0f0f0',
    },
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