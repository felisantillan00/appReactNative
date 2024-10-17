import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Contenedor de navegación
import StackNavigator from './src/navigation/StackNavigator'; // Importamos el stack de navegación

// Este es el componente principal de la aplicación
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}