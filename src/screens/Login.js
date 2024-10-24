import React from 'react';
import {View, ScrollView} from 'react-native';
import FooterNav from '../components/organisms/FooterNav';
import LoginForm from '../components/molecules/LoginForm';
import styleContainer from '../style/StyleScreenContainer';
import stylesScreen from '../style/StyleScreenLogin';

const Login = ({ navigation, route }) => {
    const handleLogin = () => {
        navigation.navigate('Perfil'); // Navega a la pantalla "Perfil"
    };

    return (
        <View style={styleContainer.container}>
            {/* Contenido principal con ScrollView */}
            <ScrollView contentContainerStyle={styleContainer.scrollContent}>
                <LoginForm onSubmit={handleLogin} navigation={navigation} />
            </ScrollView>

            {/* Footer siempre al fondo */}
            <FooterNav navigation={navigation} route={route} />
        </View>
    );
};
export default Login;