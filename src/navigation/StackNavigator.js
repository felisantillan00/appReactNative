import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Importamos el stack de navegación
import Index from '../screens/Index'; // Pantalla Home
import EnVenta from '../screens/EnVenta';
import EnAlquiler from '../screens/EnAlquiler';
import Acceder from '../screens/Acceder';
import Dolar from '../screens/Dolar'
// Creamos una instancia del stack
const Stack = createNativeStackNavigator(); 
// StackNavigator define las rutas o pantallas de la app
const StackNavigator = () => {
    return (
        <Stack.Navigator>
            {/* Definimos las pantallas y el nombre de la ruta para cada una */}
            <Stack.Screen name="Inmobiliaria Rimoldi" component={Index} />
            <Stack.Screen name="Dolar" component={Dolar} />
            <Stack.Screen name="EnVenta" component={EnVenta} />
            <Stack.Screen name="EnAlquiler" component={EnAlquiler} />
            <Stack.Screen name="Acceder" component={Acceder} />
        </Stack.Navigator>
    );
};
export default StackNavigator;