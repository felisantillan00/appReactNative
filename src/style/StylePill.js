import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    pill: {
        borderRadius: 20, // Redondear bordes
        paddingVertical: 5, // Padding vertical
        paddingHorizontal: 10, // Padding horizontal
        alignSelf: 'flex-rigth', // Posiciona a la derecha
        marginLeft: 'auto', // Esto empuja el pill hacia la derecha

    },
    pillText: {
        color: '#FFFFFF', // Color del texto
        fontSize: 13, // Tamaño de la fuente
        fontWeight: 'bold', // Negrita
    },
});