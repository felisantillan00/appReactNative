import React from 'react';
import { View, Text } from 'react-native';
import FooterNav from '../components/organisms/FooterNav'; // Importamos el encabezado
import styleContainer from '../style/StyleScreenContainer'
import styles from '../style/StyleScreenPerfil';

const Perfil = ({navigation, route}) => {
    return (
        <View style={styleContainer.container}>
            <Text>Pantalla del perfil!</Text>
            {/* Barra de Navegación en la parte inferior */}
            <FooterNav navigation={navigation} route={route} />
        </View>
    );
};
export default Perfil;