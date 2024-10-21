import React from 'react';
import { View, Text } from 'react-native';
import styleContainer from '../style/StyleScreenContainer'
import FooterNav from '../components/organisms/FooterNav'; // Importamos el encabezado

const ProfileRent = ({navigation, route}) => {
    return (
        <View style={styleContainer.container}>
            <Text>Pantalla de PERFIL DE ALQUILERES</Text>
            {/* Barra de Navegación en la parte inferior */}
            <FooterNav navigation={navigation} route={route} />
        </View>
    );
};
export default ProfileRent;