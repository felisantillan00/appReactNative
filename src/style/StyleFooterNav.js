import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    navContainer: {
        // Cambia 'absolute' a 'flex' o 'relative'
        flex: 1, // Para asegurarte de que ocupe espacio en la parte inferior
        justifyContent: 'flex-end', // Asegura que se coloque en la parte inferior
        height: 100, // Mantén la altura deseada
        backgroundColor: '#34495e',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navButton: {
        padding: 20,
    },
    navText: {
        color: '#fff',
        fontSize: 16,
    },
});
export default styles;