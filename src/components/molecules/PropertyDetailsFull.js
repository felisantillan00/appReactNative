// import React, { useState, useEffect } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import styles from '../../style/StylePropertyDetailsFull';
// import properties from '../../../tmp/properties.json';
// import Carousel from '../organisms/Carousel';
// import Icon from '../atoms/Icon';
// import StarRating from '../atoms/StarRating'; // Asegúrate de importar el componente
// import ConfirmationModal from '../atoms/ConfirmationModal'; // Importar el modal

// const PropertyDetailsFull = ({ propertyId }) => {
//     const [property, setProperty] = useState(null);
//     const [showMore, setShowMore] = useState(false); // Estado para controlar la expansión de la descripción
//     const [rating, setRating] = useState(0); // Estado para la calificación
//     const [isSubmitted, setIsSubmitted] = useState(false); // Estado para mostrar el modal

//     useEffect(() => {
//         const selectedProperty = properties.find(p => p.id === Number(propertyId));
//         setProperty(selectedProperty);
//     }, [propertyId]);

//     const openInGoogleMaps = () => {
//         const lat = property.location.latitude;
//         const lon = property.location.longitude;
//         const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
//         Linking.openURL(url);
//     };

//     if (!property) {
//         return <Text>No se encontró la propiedad.</Text>;
//     }

//     const handleRatingSubmit = () => {
//         setIsSubmitted(true); // Cambia el estado a enviado
//     };

//     // Función para manejar el cambio de calificación
//     const handleSetRating = (newRating) => {
//         if (!isSubmitted) { // Solo permite establecer una calificación si no ha sido enviado
//             setRating(newRating); // Establece la nueva calificación
//             handleRatingSubmit(); // Llama a la función de envío
//         }
//     };

//     // Función para cerrar el modal
//     const closeModal = () => {
//         setIsSubmitted(false); // Restablecer el estado de envío
//     };

//     return (
//         <ScrollView style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.propertyName}>{property.name}</Text>
//                 <Text style={styles.propertyPrice}>${property.price}</Text>
//             </View>
//             <Carousel images={property.images} />
//             <StarRating 
//                 rating={rating} 
//                 setRating={handleSetRating} // Usar la función de manejo de calificación
//                 isSubmitted={isSubmitted} // Pasar el estado de envío
//             />
//             {/* Modal de confirmación */}
//             <ConfirmationModal 
//                 visible={isSubmitted} 
//                 onClose={closeModal} 
//             />
//             <View style={styles.addressContainer}>
//                 <Icon source={require('../../img/UbicacionDark.png')} />
//                 <Text style={styles.propertyAddress}>{property.address}</Text>
//             </View>
//             {/* Título para la Información Básica */}
//             <Text style={styles.infoTitle}>Información Básica</Text>
//             <View style={styles.featuresContainer}>
//                 <View style={styles.feature}>
//                     <Text>{property.features.bathrooms} Baños</Text>
//                 </View>
//                 <View style={styles.feature}>
//                     <Text>{property.features.bedrooms} Habitaciones</Text>
//                 </View>
//                 <View style={styles.feature}>
//                     <Text>{property.features.size} m²</Text>
//                 </View>
//             </View>
//             {/* Título para la Descripción */}
//             <Text style={styles.infoTitle}>Descripción:</Text>
//             <View style={styles.descriptionContainer}>
//                 <Text style={styles.descriptionText}>
//                     {showMore ? property.description : `${property.description.substring(0, 100)}...`}
//                 </Text>
//                 <TouchableOpacity onPress={() => setShowMore(!showMore)}>
//                     <Text style={styles.toggleText}>
//                         {showMore ? 'Ver menos' : 'Ver más'}
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.mapContainer}>
//                 <MapView
//                     style={styles.map}
//                     initialRegion={{
//                         latitude: property.location.latitude,
//                         longitude: property.location.longitude,
//                         latitudeDelta: 0.01,
//                         longitudeDelta: 0.01,
//                     }}
//                 >
//                     <Marker coordinate={property.location} />
//                 </MapView>
//                 <TouchableOpacity style={styles.mapButton} onPress={openInGoogleMaps}>
//                     <Text style={styles.mapButtonText}>Abrir en Google Maps</Text>
//                 </TouchableOpacity>
//             </View>
//             {/* Botón de consulta o alquiler/comprar */}
//             <TouchableOpacity 
//                 style={styles.footerButton} 
//                 onPress={() => { /* Lógica para consultar o alquilar */ }}
//             >
//                 <Text style={styles.footerButtonText}>
//                     {'Consultar/Alquilar/Comprar'}
//                 </Text>
//             </TouchableOpacity>
//         </ScrollView>
//     );
// };

// export default PropertyDetailsFull;
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from '../../style/StylePropertyDetailsFull';
import properties from '../../../tmp/properties.json';
import Carousel from '../organisms/Carousel';
import Icon from '../atoms/Icon';
import StarRating from '../atoms/StarRating';
import ImageModal from '../atoms/ImageModal';
import ConfirmationModal from '../atoms/ConfirmationModal';

const PropertyDetailsFull = ({ propertyId }) => {
    const [property, setProperty] = useState(null);
    const [showMore, setShowMore] = useState(false); 
    const [rating, setRating] = useState(0); 
    const [isSubmitted, setIsSubmitted] = useState(false); 
    const [isImageModalVisible, setIsImageModalVisible] = useState(false); // Estado para el modal de imagen
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Índice de la imagen actual

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

    // Función para abrir el modal de imagen
    const openImageModal = (index) => {
        setCurrentImageIndex(index);
        setIsImageModalVisible(true);
    };

    // Función para cerrar el modal de imagen
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
                onImagePress={openImageModal} // Pasar la función para abrir el modal de imagen
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
                <TouchableOpacity style={styles.mapButton} onPress={openInGoogleMaps}>
                    <Text style={styles.mapButtonText}>Abrir en Google Maps</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity 
                style={styles.footerButton} 
                onPress={() => { /* Lógica para consultar o alquilar */ }}
            >
                <Text style={styles.footerButtonText}>
                    {'Consultar/Alquilar/Comprar'}
                </Text>
            </TouchableOpacity>

            {/* Modal de imagen */}
            <ImageModal 
                visible={isImageModalVisible}
                images={property.images}
                currentIndex={currentImageIndex}
                onClose={closeImageModal}
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