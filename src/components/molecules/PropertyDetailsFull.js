import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from '../../style/StylePropertyDetailsFull';
import properties from '../../../tmp/properties.json';
import Carousel from '../organisms/Carousel';
import Icon from '../atoms/Icon';
import StarRating from '../atoms/StarRating';
import ConfirmationModal from '../atoms/ConfirmationModal';
import ImageViewing from 'react-native-image-viewing';  // Asegúrate de importar esto

const PropertyDetailsFull = ({ propertyId }) => {
    const [property, setProperty] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const [rating, setRating] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isImageModalVisible, setIsImageModalVisible] = React.useState(false);
    const [currentImageIndex, setCurrentImageIndex] =  React.useState(0);

    useEffect(() => {
        const selectedProperty = properties.find(p => p.id === Number(propertyId));
        setProperty(selectedProperty);
    }, [propertyId]);

    const openInGoogleMaps = () => {
        const lat = property.location.latitude;
        const lon = property.location.longitude;
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
        Linking.openURL(url);
    };

    if (!property) {
        return <Text>No se encontró la propiedad.</Text>;
    }

    const handleRatingSubmit = () => {
        setIsSubmitted(true);
    };

    const handleSetRating = (newRating) => {
        if (!isSubmitted) {
            setRating(newRating);
            handleRatingSubmit();
        }
    };

    const closeModal = () => {
        setIsSubmitted(false);
    };

    const openImageModal = (index) => {
        console.log("Abriendo modal para la imagen con índice:", index);
        setCurrentImageIndex(index);
        setIsImageModalVisible(true);
        console.log("Estado del modal visible:", isImageModalVisible);
    };

    const closeImageModal = () => {
        setIsImageModalVisible(false);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.propertyName}>{property.name}</Text>
                <Text style={styles.propertyPrice}>${property.price}</Text>
            </View>
            <Carousel
                images={property.images}
                onImagePress={openImageModal}  // Asegúrate de pasar bien esta función
            />
            <StarRating
                rating={rating}
                setRating={handleSetRating}
                isSubmitted={isSubmitted}
            />
            <View style={styles.addressContainer}>
                <Icon source={require('../../img/UbicacionDark.png')} />
                <Text style={styles.propertyAddress}>{property.address}</Text>
            </View>

            <Text style={styles.infoTitle}>Información Básica</Text>
            <View style={styles.featuresContainer}>
                <View style={styles.feature}>
                    <Text>{property.features.bathrooms} Baños</Text>
                </View>
                <View style={styles.feature}>
                    <Text>{property.features.bedrooms} Habitaciones</Text>
                </View>
                <View style={styles.feature}>
                    <Text>{property.features.size} m²</Text>
                </View>
            </View>

            <Text style={styles.infoTitle}>Descripción:</Text>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    {showMore ? property.description : `${property.description.substring(0, 100)}...`}
                </Text>
                <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                    <Text style={styles.toggleText}>
                        {showMore ? 'Ver menos' : 'Ver más'}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: property.location.latitude,
                        longitude: property.location.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker coordinate={property.location} />
                </MapView>
            </View>
            <TouchableOpacity
                style={styles.footerButton}
                onPress={() => { /* Lógica para consultar o alquilar */ }}
            >
                <Text style={styles.footerButtonText}>
                    {'Consultar/Alquilar/Comprar'}
                </Text>
            </TouchableOpacity>

            {/* Modal de imagen con ImageViewing */}
            <ImageViewing
                images={property.images.map(image => ({ uri: image }))}
                imageIndex={currentImageIndex}
                visible={isImageModalVisible}
                // onRequestClose={closeImageModal}  // Cerrar modal cuando se presiona fuera
            />

            {/* Modal de confirmación */}
            <ConfirmationModal
                visible={isSubmitted}
                onClose={closeModal}
            />
        </ScrollView>
    );
};
export default PropertyDetailsFull;