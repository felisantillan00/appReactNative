import {View} from 'react-native'; // Asegúrate de importar Text
import React from 'react';
import Carousel from '../components/organisms/Carousel';
import HeaderNav from '../components/organisms/HeaderNav'; // Importamos el encabezado
import styles from '../style/StyleScreenIndex';
import styleContainer from '../style/StyleScreenContainer'

// Index es la pantalla principal
const Index = ({navigation, route}) => {
    // Lista de imágenes para el carrusel
    const images = [
        "https://images.unsplash.com/photo-1559494007-9f5847c49d94",
        "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85",
        "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
        "https://images.unsplash.com/photo-1525183995014-bd94c0750cd5",
    ];
    return (
        <View style={styleContainer.container}>
            {/* Carrusel de Imágenes */}
            <View style={styles.carouselContainer}>
                {/* Aquí llamamos al carrusel */}
                <Carousel images={images} /> 
            </View>
            {/* Barra de Navegación en la parte inferior */}
            <HeaderNav navigation={navigation} route={route} />
            {/* Asegúrate de envolver cualquier texto en un componente Text */}
        </View>
    );
};
export default Index;