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
});
export default styles;