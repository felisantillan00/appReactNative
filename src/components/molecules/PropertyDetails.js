import React from 'react';
import {View, Text} from 'react-native';
import LocationIcon from '../atoms/LocationIcon';
import Button from '../atoms/Button';
import styles from '../../style/StylePropertyDetails';

const PropertyDetails = ({ property, isLoggedIn }) => {
    return (
        <View style={styles.container}>
            {/* Ubicación y dirección */}
            <View style={styles.locationContainer}>
                <LocationIcon /> 
                <Text style={styles.address}>{property.address}</Text>
            </View>
            {/* Mostrar el precio solo si el usuario está logueado */}
            {isLoggedIn && <Text style={styles.price}>{`$${property.price}`}</Text>}
            {/* Botón de "Ver más" */}
            <Button title="Ver más" onPress={() => console.log('Ver más de', property.id)} />
        </View>
    );
};
export default PropertyDetails;