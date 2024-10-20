import React from 'react';
import { View, Text } from 'react-native';
import Icon from '../atoms/Icon'
import Button from '../atoms/Button';
import Carousel from '../organisms/Carousel'; // Asegúrate de importar el carrusel
import Pill from '../atoms/Pill';
import styles from '../../style/StylePropertyDetails';

const PropertyDetails = ({property, isLoggedIn }) => {
    return (
        <View style={styles.propertyCard}>
            {/* Carrusel de imágenes para cada propiedad */}
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
            {/* Mostrar el precio solo si el usuario está logueado */}
            {isLoggedIn && <Text style={styles.price}>{`$${property.price}`}</Text>}
            {/* Botón de "Ver más" */}
            <Button title="Ver más" onPress={() => console.log('Ver más de', property.id)} />
        </View>
    );
};
export default PropertyDetails;

                // {/* Icono de en venta
                // {property.forSale && <Icon source={require('../../img/Sale.png')}/>}
                // {/* Icono de alquiler */}
                // {property.forRent && <Icon source={require('../../img/PropEnAlquiler.png')}/>} */}