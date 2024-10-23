import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker } from 'react-native-maps';
import Button from '../components/atoms/Button';
import styles from '../style/StyleScreenContacto';

const Perfil = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handlePhonePress = () => {
        Linking.openURL('tel:+5492302628823'); // Cambia por tu número
    };

    const handleWhatsAppPress = () => {
        const phoneNumber = '+5492302628823';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hola.. Estoy interesado en una propiedad')}`;
        Linking.openURL(url).catch(err => console.error('Error al abrir WhatsApp', err));
    };

    const handleEmailPress = () => {
        const subject = 'Contacto desde la app: ' + name;
        const body = `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`;
        const emailUrl = `mailto:felipe.santillan00@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        Linking.openURL(emailUrl).catch(err => console.error('Error al abrir el correo', err));
    };

    const openInGoogleMaps = () => {
        const lat = -35.640307;
        const lon = -63.761703;
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
        Linking.openURL(url);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contáctanos</Text>
            <Text style={styles.description}>¡Estamos aquí para ayudarte! Elige un método de contacto o completa el formulario:</Text>

            {/* Formulario */}
            <TextInput
                style={styles.input}
                placeholder="Tu nombre"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Tu correo"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.textArea}
                placeholder="Escribe tu mensaje..."
                value={message}
                onChangeText={setMessage}
                multiline
            />
            <Button title="Enviar mensaje" onPress={handleEmailPress} />

            {/* Dirección */}
            <View style={styles.addressContainer}>
                <Icon name="map-marker" size={24} color="#333" />
                <Text style={styles.propertyAddress}>Dirección: Calle Siempre Viva 742</Text>
            </View>

            {/* Mapa */}
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -35.640307,
                        longitude: -63.761703,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker coordinate={{latitude: -35.640307, longitude: -63.761703,}} title="Ubicación de la inmobiliaria"/>                
                </MapView>
            </View>
            <Text style={styles.description}>O contáctanos por:</Text>
            {/* Íconos de contacto */}
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={handlePhonePress} style={styles.iconButton}>
                    <Icon name="phone" size={50} color="#AD40AF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleWhatsAppPress} style={styles.iconButton}>
                    <Icon name="whatsapp" size={50} color="#AD40AF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleEmailPress} style={styles.iconButton}>
                    <Icon name="envelope" size={50} color="#AD40AF" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Perfil;
