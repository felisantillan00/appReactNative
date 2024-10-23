import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
        marginBottom: 5,
    },
    description: {
        textAlign: 'center',
        marginBottom: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    iconButton: {
        padding: 25,
    },
    mapContainer: {
        width: '100%', // Asegura que ocupe todo el ancho
        height: 250, // Ajusta el alto según necesites
        marginVertical: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10, // Redondea los bordes del contenedor del mapa
        overflow: 'hidden', // Asegura que el mapa no sobresalga del contenedor
    },
    map: {
        flex: 1, // Asegura que el mapa ocupe todo el espacio del contenedor
    },
    addressContainer: {
        marginVertical: 16,
        padding: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
    },
    textArea: {
        height: 80,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
        textAlignVertical: 'top',
    },
});

export default styles;
