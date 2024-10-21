import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
// import RegistrationSVG from '../assets/images/misc/registration.svg';
import Google from '../../img/Google.png';
import Facebook from '../../img/Facebook.png';
import Instagram from '../../img/Instagram.png';
import RegistrationForm from '../molecules/RegistratonForm'; // Importa el formulario de registro
import styleContainer from '../../style/StyleScreenContainer';
import stylesScreen from '../../style/StyleScreenRegister';

const RegisterScreen = ({ navigation }) => {
    const handleRegister = (formData) => {
        console.log("Datos del formulario de registro:", formData);
        // Aquí podrías añadir la lógica para registrar el perfil
    };

    return (
        <SafeAreaView style={styleContainer.container}>
            <ScrollView contentContainerStyle={styleContainer.scrollContent} showsVerticalScrollIndicator={false}>
                <Text style={stylesScreen.title}>Register</Text>
                <View style={stylesScreen.socialButtonsContainer}>
                    <TouchableOpacity style={stylesScreen.socialButton}>
                        <Image source={Google} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesScreen.socialButton}>
                        <Image source={Facebook} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesScreen.socialButton}>
                        <Image source={Instagram} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                </View>
                <Text style={stylesScreen.orText}>Or, register with email ...</Text>
                <RegistrationForm onSubmit={handleRegister} />
                <View style={stylesScreen.loginLinkContainer}>
                    <Text>Ya estas registrado?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={stylesScreen.loginLink}> Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default RegisterScreen;