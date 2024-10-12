import { StyleSheet } from 'react-native';

// Estilos para el encabezado
const styles = StyleSheet.create({
    header: {
        paddingTop: 40, // Espacio en la parte superior (útil para separar de la barra de estado)
        backgroundColor: '#34495e', // Color de fondo para el encabezado
        justifyContent: 'flex-end', // Coloca la barra de navegación en la parte inferior
    },
    title: {
        fontSize: 24, // Tamaño de la fuente del título
        color: '#fff', // El color del texto es blanco
        textAlign: 'center', // El título está centrado
        padding: 10, // Espaciado alrededor del título
    },
});

export default styles;