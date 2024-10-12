import {View, Animated, Text} from 'react-native'; // Asegúrate de importar Text
import React from 'react';
import ImageCarousel from '../components/organisms/ImageCarrousel';
import HeaderNav from '../components/organisms/HeaderNav'; // Importamos el encabezado
import styles from '../style/StyleIndex';

// Index es la pantalla principal
const Index = ({ navigation }) => {
    // Definimos scrollX para el carrusel
    const scrollX = new Animated.Value(0); 
    // Lista de imágenes para el carrusel
    const images = [
        { uri: "https://images.unsplash.com/photo-1559494007-9f5847c49d94", title: "Imagen 1" },
        { uri: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85", title: "Imagen 2" },
        { uri: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0", title: "Imagen 3" },
        { uri: "https://images.unsplash.com/photo-1525183995014-bd94c0750cd5", title: "Imagen 4" },
    ];
    return (
        <View style={[styles.container, { flex: 4 }]}>
            {/* Carrusel de Imágenes */}
            <ImageCarousel scrollX={scrollX} images={images} />
            {/* Navegación Encabezado */}
            <HeaderNav navigation={navigation} />
            {/* Mensaje de texto */}
            <Text style={styles.content}>This is the Home Screen</Text>
            {/* Aquí puedes añadir más contenido si lo necesitas */}
        </View>
    );
};
export default Index;