import {StyleSheet, Dimensions} from 'react-native';
const { width } = Dimensions.get('window');
// Estilos del botón
const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginHorizontal: 15,
        borderWidth: 1, // Grosor del borde
        borderColor: '#000', // Color del borde, puedes cambiarlo según prefieras
        borderRadius: 80, // Redondeo de las esquinas
        backgroundColor: '#98FF98', // Fondo del botón, si lo necesitas
    },
    image: {
        width: width * 0.06,
        height: 25,
        resizeMode: 'contain',
    },
});
export default styles;
