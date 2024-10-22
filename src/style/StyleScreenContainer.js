import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingBottom: 80, /* Ajusta esto dependiendo de la altura del footer */
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        padding: 20,  // Asegúrate de tener algo de espacio alrededor del contenido
    },
});
export default styles;