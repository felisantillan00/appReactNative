import React from 'react';
import {View} from 'react-native';
import NavButton from '../atoms/NavButton'; // Importamos el átomo NavButton
import styles from '../../style/StyleNavBar';
// NavBar es una molécula que junta varios botones y organiza su distribución en la pantalla.
const NavBar = ({ navigation }) => {
    return (
        <View style={styles.navbar}>
            {/* Creamos dos botones que navegan a las pantallas Home y About */}
            <NavButton title="En venta" onPress={() => navigation.navigate('EnVenta')} />
            <NavButton title="En alquiler" onPress={() => navigation.navigate('EnAlquiler')} />
            <NavButton title="Acceder" onPress={() => navigation.navigate('Acceder')} />
        </View>
    );
};
export default NavBar;