import { View, TextInput, Text } from 'react-native';
import styles from '../../style/StyleInputField';

const InputField = ({ label, icon, placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputWrapper}>
                {icon}
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                />
            </View>
        </View>
    );
};
export default InputField;