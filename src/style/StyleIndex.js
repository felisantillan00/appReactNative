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
    navBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: '#34495e',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default styles;