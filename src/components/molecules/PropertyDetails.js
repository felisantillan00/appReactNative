import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa el hook de navegación
import Icon from '../atoms/Icon'
// import Button from '../atoms/Button';
import Carousel from '../organisms/Carousel'; // Asegúrate de importar el carrusel
import Pill from '../atoms/Pill';
import styles from '../../style/StylePropertyDetails';

const PropertyDetails = ({property, isLoggedIn }) => {
    const navigation = useNavigation(); // Obtén el objeto navigation

    return (
        <View style={styles.propertyCard}>
            {/* Carrusel de imágenes para cada propiedad */}
            <Text>{property.typeProperty}</Text>
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
                <Icon source={require('../../img/BañoIcon.png')} />
                <Text>1</Text>
                <Icon source={require('../../img/DormitorioIcon.png')} />
                <Text style={styles.TextStyle}>10</Text>
                <Icon source={require('../../img/M2Icon.png')} />
                <Text style={styles.TextStyle}>300</Text>
            </View>
            {isLoggedIn && <Text style={styles.price}>{`$${property.price}`}</Text>}
            {/* Mostrar el precio solo si el usuario está logueado */}
            {/* Botones "Ver más" y "Contactar" en la misma fila */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MoreProperty', { propertyId: property.id })}>
                    <Image source={require('../../img/VerMas.png')} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Ver más</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact', { propertyId: property.id })}>
                    <Image source={require('../../img/Contacto.png')} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Contactar</Text>
                </TouchableOpacity>
            </View>
            {/* <Button title="Ver más" onPress={() => navigation.navigate('MoreProperty', { propertyId: property.id })}/>         */}
        </View>
    );
};
export default PropertyDetails;