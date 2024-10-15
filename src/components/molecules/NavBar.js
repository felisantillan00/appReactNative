import React from 'react';
import {View} from 'react-native';
import NavButton from '../atoms/NavButton'; // Importamos el átomo NavButton
import styles from '../../style/StyleNavBar';

// NavBar es una molécula que junta varios botones y organiza su distribución en la pantalla.
const NavBar = ({ navigation }) => {
    return (
        <View style={styles.navbar}>
            {/* Creamos dos botones que navegan a las pantallas Home y About */}
            <NavButton imageSource={require('../../img/EnVentaIcon.png')} onPress={() => navigation.navigate('EnVenta')} />
            <NavButton imageSource={require('../../img/Dolar.png')} onPress={() => navigation.navigate('Dolar')} />
            <NavButton imageSource={require('../../img/EnAlquilerIconOp1.png')} onPress={() => navigation.navigate('EnAlquiler')} />
            <NavButton imageSource={require('../../img/SignUpIcon.png')} onPress={() => navigation.navigate('Acceder')} />
        </View>
    );
};
export default NavBar;