import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Cambiar a 'flex-start' para que el contenido comience en la parte superior
        backgroundColor: '#f0f0f0',
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        padding: 20,  // Asegúrate de tener algo de espacio alrededor del contenido
    },
});
export default styles;