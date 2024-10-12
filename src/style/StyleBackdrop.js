// Cambiar en los archivos de estilos
import {StyleSheet} from 'react-native';
// Estilos del Image
const styles = StyleSheet.create({
    backdrop: {
        position: 'absolute',
        width: '100%',
        top: 0,
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    gradient: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
});
export default styles;