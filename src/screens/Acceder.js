import React from 'react';
import { View, Text } from 'react-native';
import HeaderNav from '../components/organisms/HeaderNav'; // Importamos el encabezado
import styles from '../style/StyleScreenAcceder';
import styleContainer from '../style/StyleScreenContainer'

const Acceder = ({navigation}) => {
    return (
        <View style={styleContainer.container}>
            <Text>Inmobiliaria Rimoldi </Text>
            <Text>Ingresar a la APP como cliente</Text>

            <HeaderNav navigation={navigation} />
        </View>
    );
};
export default Acceder;