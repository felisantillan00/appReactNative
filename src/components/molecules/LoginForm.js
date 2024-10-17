import React, { useState } from 'react';
import { View } from 'react-native';
import InputField from '../atoms/InputField';
import PrimaryButton from '../atoms/BtnIngresar';

const LoginForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        onSubmit({ username, password });
    };

    return (
        <View>
            <InputField 
                placeholder="Usuario" 
                value={username} 
                onChangeText={setUsername} // Almacena el texto ingresado
            />
            <InputField 
                placeholder="Contraseña" 
                secureTextEntry 
                value={password} 
                onChangeText={setPassword} // Almacena el texto ingresado
            />
            <PrimaryButton title="Ingresar" onPress={handleSubmit} />
        </View>
    );
};

export default LoginForm;
