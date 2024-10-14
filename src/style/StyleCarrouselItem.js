import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    image: {
        width: '100%',  // Mantiene el ancho del contenedor
        height: '100%', // Ajusta a la altura del contenedor
        resizeMode: 'cover',  // Mantiene el aspecto
        borderRadius: 24,
    },
});
export default styles;