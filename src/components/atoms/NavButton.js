import { TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from '../../style/StyleNavButton';
// NavButton es un botón reutilizable. Recibe un título (texto del botón) y una función onPress (qué hacer cuando el botón es presionado).
const NavButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {/* El texto del botón se muestra aquí */}
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};
export default NavButton; // Exportamos el componente para usarlo en otros lugares