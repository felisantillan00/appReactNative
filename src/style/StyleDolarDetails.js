import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#008080',
        marginLeft: 10,
        marginRight: 10,
        
    },
    tipo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        color: '#777',
    },
    value: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#008080',
    },
    separator: {
        width: 1,
        backgroundColor: '#ccc',
        marginHorizontal: 10,
    },
    fecha: {
        marginTop: 10,
        fontSize: 12,
        color: '#777',
        textAlign: 'center',
    },
});
export default styles;