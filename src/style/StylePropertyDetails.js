import {StyleSheet, Dimensions} from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    propertyCard: {
        backgroundColor: '#fff',
        padding: width * 0.04,  // Aproximadamente el 4% del ancho de la pantalla
        marginVertical: width * 0.01,  // Aproximadamente el 2% del ancho
        marginHorizontal: width * 0.01,  // Aproximadamente el 5% del ancho
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4, // Añade sombra para Android
        justifyContent: 'flex-start', // Para mantener el contenido al principio
        alignItems: 'flex-rigth', // Esto alineará el contenido a la derecha
    },
    PriceAndText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    address: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    price: {
        fontSize: 16,
        marginTop: 5,
        color: '#4CAF50',
    },
    extraInfo: {
        marginTop: width * 0.02,
        fontStyle: 'italic',
        color: '#888',
    },
    locationContainer: {
        padding: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    InformationContainer:{
        padding: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    TextStyle:{
        marginLeft: 10,
    },
    buttonContainer: {
        flexDirection: 'row',       // Pone los botones en fila
        justifyContent: 'space-between', // Espaciado entre botones
        marginTop: 10,
    },
    button: {
        flexDirection: 'row',       // Contenido del botón en fila
        alignItems: 'center',       // Alinea la imagen y el texto
        padding: 10,
        backgroundColor: '#007BFF', // Color de fondo del botón
        borderRadius: 5,
        width: width * 0.4,
    },
    buttonText: {
        color: '#fff',              // Color del texto del botón
        marginLeft: 5,              // Espaciado entre la imagen y el texto
    },
    buttonIcon: {
        width: 20,                  // Ancho de la imagen dentro del botón
        height: 20,                 // Alto de la imagen dentro del botón
    },
});
export default styles;