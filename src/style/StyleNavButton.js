import {StyleSheet, Dimensions} from 'react-native';
const { width } = Dimensions.get('window');
// Estilos del botón
const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 15,
        borderWidth: 2, // Grosor del borde
        borderColor: '#000', // Color del borde, puedes cambiarlo según prefieras
        borderRadius: 100, // Redondeo de las esquinas
        backgroundColor: '#98FF98', // Fondo del botón, si lo necesitas
    },
    image: {
        width: width * 0.07,
        height: 25,
        resizeMode: 'contain',
    },
});
export default styles;
