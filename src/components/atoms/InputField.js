// src/components/atoms/InputField.js
import React, { useState } from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from '../../style/StyleInputField';

const InputField = ({ placeholder, secureTextEntry, value, onChangeText }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.inputContainer}>
            {/* Etiqueta que actúa como placeholder */}
            <Text style={[styles.label, isFocused || value ? styles.labelFocused : {}]}>
                {placeholder}
            </Text>
            <TextInput
                style={styles.input}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="" // Se puede dejar vacío si se está utilizando la etiqueta
                underlineColorAndroid="transparent" // Evita que se muestre la línea subrayada en Android
            />
        </View>
    );
};
export default InputField;