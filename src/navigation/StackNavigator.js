import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Image } from 'react-native';
import Dolar from '../screens/Dolar';
import EnVenta from '../screens/EnVenta';
import Index from '../screens/Index';
import EnAlquiler from '../screens/EnAlquiler';
import Acceder from '../screens/Acceder';
import Perfil from '../screens/Perfil'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const [darkMode, setDarkMode] = useState(false); // Estado para el modo oscuro/claro
    // Función para alternar entre el modo oscuro y claro
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <Stack.Navigator initialRouteName="Index">
            <Stack.Screen name="Dolar" component={Dolar} />
            <Stack.Screen name="EnVenta" component={EnVenta} />
            <Stack.Screen 
                name="Index" 
                component={Index} 
                options={{title: 'Inmobiliaria Rimoldi' }} 
            />
            <Stack.Screen name="EnAlquiler" component={EnAlquiler} />
            <Stack.Screen 
                name="Acceder" 
                component={Acceder} 
                options={{
                    title: 'Acceder',
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
        </Stack.Navigator>
    );
};

export default StackNavigator;