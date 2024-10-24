import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Image } from 'react-native';
import PropertyDetailsFull from '../components/molecules/PropertyDetailsFull';
import Dolar from '../screens/Dolar';
import EnVenta from '../screens/EnVenta';
import Index from '../screens/Index';
import EnAlquiler from '../screens/EnAlquiler';
import Login from '../screens/Login';
import Perfil from '../screens/Perfil';
import Register from '../screens/Register';
import InfoProperty from '../screens/InfoProperty';
import ProfileRent from '../screens/ProfileRent';
import ProfileSale from '../screens/ProfileSale';
import Contacto from '../screens/Contacto'
import Procedimiento from '../screens/Procedimiento';
import Camera from '../screens/CameraComponent'
import ProfilePicture from '../components/molecules/ProfilePicture';
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
            <Stack.Screen
                name="InfoProperty"
                component={InfoProperty}
                options={{title: 'Propiedad xxx'}}
            />
            <Stack.Screen
                name="ProfileRent"
                component={ProfileRent}
                options={{title: 'Alquiler del perfil xxx'}}
            />
            <Stack.Screen
                name="ProfileSale"
                component={ProfileSale}
                options={{title: 'Ventas del perfil xxx'}}
            />
            <Stack.Screen
                name="Contacto"
                component={Contacto}
                options={{title: 'Contacto'}}
            />
            <Stack.Screen
                name="PropertyDetailsFull"
                component={PropertyDetailsFull}
                options={{title: 'Informacion de propiedades'}}
            />
            <Stack.Screen
                name="Procedimiento"
                component={Procedimiento}
                options={{title: 'Procedimiento de operaciones'}}
            />
            <Stack.Screen
                name="ProfilePicture"
                component={ProfilePicture}
                options={{title: 'ProfilePicture'}}
            />
            <Stack.Screen
                name="Camera"
                component={Camera}
            />
        </Stack.Navigator>
    );
};
export default StackNavigator;