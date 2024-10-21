import React from 'react';
import { View, Text } from 'react-native';
import styleContainer from '../style/StyleScreenContainer'
import FooterNav from '../components/organisms/FooterNav'; // Importamos el encabezado

const EnVenta = ({navigation, route}) => {
    return (
        <View style={styleContainer.container}>
            <Text>Pantalla de ventas</Text>
            {/* Barra de Navegación en la parte inferior */}
            <FooterNav navigation={navigation} route={route} />
        </View>
    );
};
export default EnVenta;