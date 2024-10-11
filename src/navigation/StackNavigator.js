import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Importamos el stack de navegación
import Index from '../screens/Index'; // Pantalla Home

const Stack = createNativeStackNavigator(); // Creamos una instancia del stack

// StackNavigator define las rutas o pantallas de la app
const StackNavigator = () => {
    return (
        <Stack.Navigator>
            {/* Definimos las pantallas y el nombre de la ruta para cada una */}
            <Stack.Screen name="Home" component={Index} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
