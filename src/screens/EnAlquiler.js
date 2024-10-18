import React from 'react';
import { View, Text } from 'react-native';
import FooterNav from '../components/organisms/FooterNav'; // Importamos el encabezado
import styles from '../style/StyleScreenEnAlquiler';
import styleContainer from '../style/StyleScreenContainer'

const EnAlquiler = ({navigation, route}) => {
    return (
        <View style={styleContainer.container}>
            <Text>Pantalla de alquileres</Text>
            {/* Barra de Navegación en la parte inferior */}
            <FooterNav navigation={navigation} route={route} />
        </View>
    );
};
export default EnAlquiler;