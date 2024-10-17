import React from 'react';
import {View} from 'react-native';
import NavBar from '../molecules/NavBar'; // Importamos la barra de navegación
import styles from '../../style/StyleFooterNav';

const FooterNav = ({ navigation, route }) => {
    return (
        <View style={styles.header}>
            <NavBar key={route.name} navigation={navigation} route={route} />
        </View>
    );
};
export default FooterNav;