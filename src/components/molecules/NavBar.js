// import React from 'react';
// import {View} from 'react-native';
// import NavButton from '../atoms/NavButton'; // Importamos el átomo NavButton
// import styles from '../../style/StyleNavBar';

// // NavBar es una molécula que junta varios botones y organiza su distribución en la pantalla.
// const NavBar = ({ navigation }) => {
//     return (
//         <View style={styles.navbar}>
//             {/* Creamos dos botones que navegan a las pantallas Home y About */}
//             <NavButton imageSource={require('../../img/EnVentaIcon.png')} onPress={() => navigation.navigate('EnVenta')} />
//             <NavButton imageSource={require('../../img/Dolar.png')} onPress={() => navigation.navigate('Dolar')} />
//             <NavButton imageSource={require('../../img/EnAlquilerIconOp1.png')} onPress={() => navigation.navigate('EnAlquiler')} />
//             <NavButton imageSource={require('../../img/SignUpIcon.png')} onPress={() => navigation.navigate('Acceder')} />
//         </View>
//     );
// };
// export default NavBar;
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import NavButton from '../atoms/NavButton'; // Importamos el átomo NavButton
import styles from '../../style/StyleNavBar';

const NavBar = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('EnVenta'); // Guardamos la pestaña activa

    // Función para cambiar la pestaña activa y navegar
    const handleNavigation = (screen) => {
        setActiveTab(screen); // Actualizamos la pestaña activa
        navigation.navigate(screen); // Navegamos a la pantalla correspondiente
    };

    return (
        <View style={styles.navbar}>
            {/* Botón En Venta */}
            <View style={styles.navButtonContainer}>
                <NavButton 
                    imageSource={require('../../img/EnVentaIcon.png')} 
                    onPress={() => handleNavigation('EnVenta')} 
                    isActive={activeTab === 'EnVenta'} // Pasamos si está activo
                />
                <Text style={activeTab === 'EnVenta' ? styles.activeLabel : styles.label}>En Venta</Text>
            </View>

            {/* Botón Dólar */}
            <View style={styles.navButtonContainer}>
                <NavButton 
                    imageSource={require('../../img/Dolar.png')} 
                    onPress={() => handleNavigation('Dolar')} 
                    isActive={activeTab === 'Dolar'} 
                />
                <Text style={activeTab === 'Dolar' ? styles.activeLabel : styles.label}>Dólar</Text>
            </View>

            {/* Botón En Alquiler */}
            <View style={styles.navButtonContainer}>
                <NavButton 
                    imageSource={require('../../img/EnAlquilerIconOp1.png')} 
                    onPress={() => handleNavigation('EnAlquiler')} 
                    isActive={activeTab === 'EnAlquiler'} 
                />
                <Text style={activeTab === 'EnAlquiler' ? styles.activeLabel : styles.label}>En Alquiler</Text>
            </View>

            {/* Botón Acceder */}
            <View style={styles.navButtonContainer}>
                <NavButton 
                    imageSource={require('../../img/SignUpIcon.png')} 
                    onPress={() => handleNavigation('Acceder')} 
                    isActive={activeTab === 'Acceder'} 
                />
                <Text style={activeTab === 'Acceder' ? styles.activeLabel : styles.label}>Acceder</Text>
            </View>
        </View>
    );
};

export default NavBar;
