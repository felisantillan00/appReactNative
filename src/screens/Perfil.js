import React from 'react';
import {View} from 'react-native';
import FooterNav from '../components/organisms/FooterNav'; // Importamos el encabezado
import UserProfile from '../components/organisms/UserProfile';
import styleContainer from '../style/StyleScreenContainer'

const Perfil = ({navigation, route}) => {
    return (
        <View style={styleContainer.container}>
            <UserProfile/>
            {/* Barra de Navegación en la parte inferior */}
            <FooterNav navigation={navigation} route={route} />
        </View>
    );
};
export default Perfil;