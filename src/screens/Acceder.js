import React from 'react';
import {View, Text} from 'react-native';
import HeaderNav from '../components/organisms/HeaderNav';
import LoginForm from '../components/molecules/LoginForm';
import styleContainer from '../style/StyleScreenContainer';
import stylesScreen from '../style/StyleScreenAcceder';

const Acceder = ({navigation, route }) => {
    const handleLogin = () => {
        // Lógica de autenticación
        console.log("Login presionado");
    };
    return (
        <View style={styleContainer.container}>
            <Text style={stylesScreen.title}>Inmobiliaria Rimoldi</Text>
            <Text style={stylesScreen.subtitle}>Ingresar a la APP como cliente</Text>
            <LoginForm onSubmit={handleLogin} />
            <HeaderNav navigation={navigation} route={route} />
        </View>
    );
};
export default Acceder;