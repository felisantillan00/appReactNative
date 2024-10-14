import { StyleSheet } from 'react-native';
// Estilos del botón
const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 15,
        borderWidth: 2, // Grosor del borde
        borderColor: '#000', // Color del borde, puedes cambiarlo según prefieras
        borderRadius: 10, // Redondeo de las esquinas
        backgroundColor: '#f9f9f9', // Fondo del botón, si lo necesitas
    },
    image: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});
export default styles;
