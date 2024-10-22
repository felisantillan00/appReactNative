import {StyleSheet, Dimensions} from 'react-native';
const MAX_WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: MAX_WIDTH * 0.21, // Ajusta la posición vertical
        right: 30,  // Ajusta la posición horizontal
        width: MAX_WIDTH * 0.14,  // Ajusta el tamaño
        height: 60, // Ajusta el tamaño
        borderRadius: 30, // Para que sea circular
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9800', // Color del fondo
        elevation: 5, // Sombra en Android
        shadowColor: '#000', // Sombra en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    icon: {
        width: 30, // Tamaño del ícono
        height: 30, // Tamaño del ícono
    },
});
export default styles;