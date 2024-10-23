import React from 'react';
import { View, Text, Linking, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa el hook de navegación
import Icon from '../atoms/Icon'
import Carousel from '../organisms/Carousel'; // Asegúrate de importar el carrusel
import Pill from '../atoms/Pill';
import styles from '../../style/StylePropertyDetails';

const PropertyDetailsMin = ({ property, isLoggedIn }) => {
    const navigation = useNavigation(); // Obtén el objeto navigation

    const handleWhatsAppContact = (propertyId) => {
        const phoneNumber = '+5492302628823'; // Reemplaza con el número de WhatsApp al que quieres enviar el mensaje
        const message = `Hola.. Estoy interesado en esta propiedad con ID: ${propertyId}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        Linking.openURL(url)
            .catch(err => console.error('Error al abrir WhatsApp', err));
    };

    return (
        <View style={styles.propertyCard}>
            {/* Carrusel de imágenes para cada propiedad */}
            <View style={styles.PriceAndText}>
                <Text>{property.typeProperty}</Text>
                {isLoggedIn && <Text style={styles.price}>{`$${property.price}`}</Text>}
            </View>
            <Carousel images={property.images} />
            {/* Ubicación y dirección */}
            <View style={styles.locationContainer}>
                <Icon source={require('../../img/UbicacionDark.png')} />
                <Text style={styles.address}>{property.address}</Text>
                {/* Mostrar ambos Pill si la propiedad está en venta y en alquiler */}
                {property.forSale && (
                    <Pill label="En Venta" color="#2e7500" />
                )}
                {property.forRent && (
                    <Pill label="En Alquiler" color="#FF9800" />
                )}
            </View>
            <View style={styles.InformationContainer}>
                <Text>1</Text>
                <Icon source={require('../../img/BañoIcon.png')} />
                <Text style={styles.TextStyle}>10</Text>
                <Icon source={require('../../img/DormitorioIcon.png')} />
                <Text style={styles.TextStyle}>300</Text>
                <Icon source={require('../../img/M2Icon.png')} />
            </View>
            {/* Mostrar el precio solo si el usuario está logueado */}
            {/* Botones "Ver más" y "Contactar" en la misma fila */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('InfoProperty', { propertyId: property.id });}}>
                    <Image source={require('../../img/VerMas.png')} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Ver más</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleWhatsAppContact(property.id)}>
                    <Image source={require('../../img/Whatsapp.png')} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Contactar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default PropertyDetailsMin;