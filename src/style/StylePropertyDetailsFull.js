import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: width * 0.03,
        marginVertical: width * 0.01,
        marginHorizontal: width * 0.01,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
        marginBottom: 4,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    propertyName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    propertyPrice: {
        fontSize: 20,
        color: 'green',
    },
    addressContainer: {
        marginVertical: 16,
        padding: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    featuresContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 16,
    },
    descriptionContainer: {
        marginVertical: 16,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    descriptionText: {
        fontSize: 16,
        color: '#333',
    },
    mapContainer: {
        marginVertical: 16,
        borderWidth: 1,
        borderColor: 'black',
    },
    map: {
        width: '100%',
        height: 200,
    },
    footerButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: width * 0.05, // Añadir margen inferior
    },
    footerButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    infoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    toggleText: {
        color: '#2196F3',
        marginTop: 5,
    },
});
export default styles;