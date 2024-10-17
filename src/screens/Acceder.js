import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import FooterNav from '../components/organisms/FooterNav';
import LoginForm from '../components/molecules/LoginForm';
import styleContainer from '../style/StyleScreenContainer';
import stylesScreen from '../style/StyleScreenAcceder';

const Acceder = ({ navigation, route }) => {
    const handleLogin = () => {
        console.log("Login presionado");
    };
    return (
        <View style={styleContainer.container}>
            {/* Contenido principal con ScrollView */}
            <ScrollView contentContainerStyle={styleContainer.scrollContent}>
                <Text style={stylesScreen.subtitle}>Ingresar a la APP como cliente</Text>
                <LoginForm onSubmit={handleLogin} />
            </ScrollView>
            
            {/* FooterNav siempre al fondo */}
            <FooterNav navigation={navigation} route={route} />
        </View>
    );
};
export default Acceder;