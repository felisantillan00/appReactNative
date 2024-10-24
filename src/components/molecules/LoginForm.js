import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';

const LoginForm = ({ onSubmit, navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        onSubmit({ username, password });
    };
    return (
        <View style={{ paddingHorizontal: 25 }}>
            <Text style={{ fontSize: 28, fontWeight: '500', color: '#333', marginBottom: 30 }}>
                Iniciar Sesión
            </Text>
            {/* Campo de correo */}
            <InputField
                label="Email ID"
                placeholder="Ingrese su correo"
                value={username}
                onChangeText={setUsername}
            />
            {/* Campo de contraseña */}
            <InputField
                label="Contraseña"
                placeholder="Ingrese su contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Ingresar" onPress={handleSubmit} />
            <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
            </Text>
            {/* Iconos de redes sociales */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
                {/* Aquí se pueden incluir botones para Google, Facebook, etc. */}
            </View>
            {/* Registro */}
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text>¿Nuevo en la app?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Regístrate</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Contacto')}>
                    <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Contactate</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Procedimiento')}>
                    <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Procedimiento</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default LoginForm;