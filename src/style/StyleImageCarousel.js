import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const ANCHO_CONTENEDOR = width * 0.7; // Ajusta este valor si es necesario
const ALTO_CONTENEDOR = ANCHO_CONTENEDOR * 0.5; // Asegúrate de que sea proporcional

const styles = StyleSheet.create({
    carouselItem: {
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 24,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        width: '100%',  // Mantiene el ancho del contenedor
        height: ALTO_CONTENEDOR,  // Ajusta la altura proporcionalmente
        resizeMode: 'cover',  // O 'contain' si prefieres que no se corte
        borderRadius: 24,
    },
});

export default styles;