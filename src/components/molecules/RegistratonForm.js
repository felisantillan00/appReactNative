import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import InputField from '../atoms/InputField';
import PrimaryButton from '../atoms/Button';

const RegistrationForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [date, setDate] = useState(new Date());
    const [dobLabel, setDobLabel] = useState('Date of Birth');
    const [open, setOpen] = useState(false);
    const handleSubmit = () => {
        onSubmit({ name, email, password, confirmPassword, date });
        
    };
    return (
        <View>
            <InputField
                label={'Full Name'}
                icon={
                    <Ionicons name="person-outline" size={20} color="#666" style={{ marginRight: 5 }} />
                }
                value={name}
                onChangeText={setName}
            />
            <InputField
                label={'Email ID'}
                icon={
                    <MaterialIcons name="alternate-email" size={20} color="#666" style={{ marginRight: 5 }} />
                }
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <InputField
                label={'Password'}
                icon={
                    <Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={{ marginRight: 5 }} />
                }
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <InputField
                label={'Confirm Password'}
                icon={
                    <Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={{ marginRight: 5 }} />
                }
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 30 }}>
                <Ionicons name="calendar-outline" size={20} color="#666" style={{ marginRight: 5 }} />
                <TouchableOpacity onPress={() => setOpen(true)}>
                    <Text style={{ color: '#666', marginLeft: 5, marginTop: 5 }}>{dobLabel}</Text>
                </TouchableOpacity>
            </View>
            <DatePicker
                modal
                open={open}
                date={date}
                mode={'date'}
                maximumDate={new Date('2005-01-01')}
                minimumDate={new Date('1980-01-01')}
                onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                    setDobLabel(date.toDateString());
                }}
                onCancel={() => setOpen(false)}
            />
            <PrimaryButton title="Register" onPress={handleSubmit} />
        </View>
    );
};

export default RegistrationForm;
