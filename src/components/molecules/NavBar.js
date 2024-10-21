// export default NavBar;
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; // Importamos useFocusEffect
import NavButton from '../atoms/NavButton';
import styles from '../../style/StyleNavBar';

const NavBar = ({ navigation, route }) => {
    const [activeTab, setActiveTab] = useState(route.name); // Inicializa con el nombre de la ruta actual
    // Este useEffect es para actualizar el tab activo cuando cambie la ruta
    useEffect(() => {
        setActiveTab(route.name);
    }, [route.name]);
    // useFocusEffect para detectar el enfoque de la pantalla 'Index'
    useFocusEffect(
        React.useCallback(() => {
            if (route.name === 'Index') {
                setActiveTab('Index'); // Asegura que se actualice cuando se enfoque Index
            }
        }, [route.name])
    );
    // Función para cambiar la pestaña activa y navegar
    const handleNavigation = (screen) => {
        setActiveTab(screen); // Actualizamos la pestaña activa
        navigation.navigate(screen); // Navegamos a la pantalla correspondiente
    };
    return (
        <View style={styles.navbar}>
            {/* Botón Home */}
            <View style={styles.navButtonContainer}>
                <NavButton
                    imageSource={require('../../img/Home.png')}
                    onPress={() => handleNavigation('Index')}
                    isActive={activeTab === 'Index'}
                />
                <Text style={activeTab === 'Index' ? styles.activeLabel : styles.label}>Home</Text>
            </View>

            {/* Botón En Venta */}
            <View style={styles.navButtonContainer}>
                <NavButton
                    imageSource={require('../../img/EnVentaIcon.png')}
                    onPress={() => handleNavigation('EnVenta')}
                    isActive={activeTab === 'EnVenta'}
                />
                <Text style={activeTab === 'EnVenta' ? styles.activeLabel : styles.label}>En Venta</Text>
            </View>

            {/* Botón En Alquiler */}
            <View style={styles.navButtonContainer}>
                <NavButton 
                    imageSource={require('../../img/EnAlquilerIcon.png')} 
                    onPress={() => handleNavigation('EnAlquiler')} 
                    isActive={activeTab === 'EnAlquiler'} 
                />
                <Text style={activeTab === 'EnAlquiler' ? styles.activeLabel : styles.label}>En Alquiler</Text>
            </View>

            {/* Botón Acceder */}
            <View style={styles.navButtonContainer}>
                <NavButton
                    imageSource={require('../../img/SignUpIcon.png')}
                    onPress={() => handleNavigation('Login')}
                    isActive={activeTab === 'Login'}
                />
                <Text style={activeTab === 'Login' ? styles.activeLabel : styles.label}>Acceder</Text>
            </View>
        </View>
    );
};
export default NavBar;