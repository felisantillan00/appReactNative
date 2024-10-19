import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Image } from 'react-native';
import Dolar from '../screens/Dolar';
import EnVenta from '../screens/EnVenta';
import Index from '../screens/Index';
import EnAlquiler from '../screens/EnAlquiler';
import Login from '../screens/Login';
import Perfil from '../screens/Perfil'
import Register from '../screens/Register'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const [darkMode, setDarkMode] = useState(false); // Estado para el modo oscuro/claro
    // Función para alternar entre el modo oscuro y claro
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <Stack.Navigator initialRouteName="Index">
            <Stack.Screen 
                name="Dolar" 
                component={Dolar}  
                options={{title: 'Cotizacion del dolar Actualizado' }} 
            />
            <Stack.Screen 
                name="EnVenta" 
                component={EnVenta} 
                options={{title: 'Propiedades en venta' }} 
            />
            <Stack.Screen 
                name="Index" 
                component={Index} 
                options={({ navigation }) => ({
                    title: 'Inmobiliaria Rimoldi',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Dolar')} style={{ padding: 10 }}>
                            <Image 
                                source={require('../img/Dolar.png')} 
                                style={{ width: 24, height: 24 }} 
                            />
                        </TouchableOpacity>
                    ),
                })} 
            />
            <Stack.Screen 
                name="EnAlquiler" 
                component={EnAlquiler} 
                options={{title: 'Propiedades en alquiler'}} 
            />
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{
                    title: 'Login',
                    headerRight: () => (
                        <TouchableOpacity onPress={toggleDarkMode} style={{ padding: 10 }}>
                            <Image 
                                source={darkMode ? require('../img/DarkMode.png') : require('../img/LightMode.png')} 
                                style={{width: 24, height: 24 }} 
                            />
                        </TouchableOpacity>
                    ),
                }} 
            />
            <Stack.Screen 
                name="Perfil" 
                component={Perfil} 
                options={{
                    title: 'Perfil',
                    headerRight: () => (
                        <TouchableOpacity onPress={toggleDarkMode} style={{ padding: 10 }}>
                            <Image 
                                source={darkMode ? require('../img/DarkMode.png') : require('../img/LightMode.png')} 
                                style={{width: 24, height: 24 }} 
                            />
                        </TouchableOpacity>
                    ),
                }} 
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{title: 'Registrate como nuevo futuro cliente'}}
            />
        </Stack.Navigator>

    );
};

export default StackNavigator;