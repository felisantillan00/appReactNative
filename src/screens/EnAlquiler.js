import React from 'react';
import { View, Text } from 'react-native';
import HeaderNav from '../components/organisms/HeaderNav'; // Importamos el encabezado
import styles from '../style/StyleScreenEnAlquiler';
import styleContainer from '../style/StyleContainer'

const EnAlquiler = ({navigation}) => {
    return (
        <View style={styleContainer.container}>
            <Text>Pantalla En Venta</Text>
            {/* Barra de Navegación en la parte inferior */}
            <HeaderNav navigation={navigation} />
        </View>
    );
};
export default EnAlquiler;