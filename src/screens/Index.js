import { View, FlatList } from 'react-native'; 
import React from 'react';
import Carousel from '../components/organisms/Carousel';
import FooterNav from '../components/organisms/FooterNav'; 
import PropertyDetails from '../components/molecules/PropertyDetails'; // Importa el componente de detalles de propiedad
import styles from '../style/StyleScreenIndex';
import styleContainer from '../style/StyleScreenContainer';

// Index es la pantalla principal
const Index = ({ navigation, route }) => {
    // Lista de imágenes para el carrusel
    const images = [
        "https://images.unsplash.com/photo-1559494007-9f5847c49d94",
        "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85",
        "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
        "https://images.unsplash.com/photo-1525183995014-bd94c0750cd5",
    ];

    // Simulamos una lista de propiedades
    const properties = [
        { id: 1, address: '123 Calle Falsa, Ciudad', price: 250000 },
        { id: 2, address: '456 Avenida Real, Ciudad', price: 300000 },
        { id: 3, address: '789 Boulevard, Ciudad', price: 150000 },
    ];

    // Suponemos que el usuario está logueado
    const isLoggedIn = true; // Cambia esto según tu lógica de autenticación

    return (
        <View style={styleContainer.container}>
            {/* Carrusel de Imágenes */}
            <View style={styles.carouselContainer}>
                <Carousel images={images} />
            </View>
            {/* Lista de propiedades */}
            <FlatList
                data={properties}
                renderItem={({ item }) => (
                    <PropertyDetails 
                        property={item} 
                        isLoggedIn={isLoggedIn} 
                    />
                )}
                keyExtractor={item => item.id.toString()} // Asegúrate de que la clave sea única
                contentContainerStyle={styles.scrollContent}
            />
            {/* Barra de Navegación en la parte inferior */}
            <FooterNav navigation={navigation} route={route} />
        </View>
    );
};

export default Index;

// import {View} from 'react-native'; // Asegúrate de importar Text
// import React from 'react';
// import Carousel from '../components/organisms/Carousel';
// import FooterNav from '../components/organisms/FooterNav'; // Importamos el encabezado
// import styles from '../style/StyleScreenIndex';
// import styleContainer from '../style/StyleScreenContainer'

// // Index es la pantalla principal
// const Index = ({navigation, route}) => {
//     // Lista de imágenes para el carrusel
//     const images = [
//         "https://images.unsplash.com/photo-1559494007-9f5847c49d94",
//         "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85",
//         "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
//         "https://images.unsplash.com/photo-1525183995014-bd94c0750cd5",
//     ];
//     return (
//         <View style={styleContainer.container}>
//             {/* Carrusel de Imágenes */}
//             <View style={styles.carouselContainer}>
//                 {/* Aquí llamamos al carrusel */}
//                 <Carousel images={images} /> 
//             </View>
//             {/* Barra de Navegación en la parte inferior */}
//             <FooterNav navigation={navigation} route={route} />
//             {/* Asegúrate de envolver cualquier texto en un componente Text */}
//         </View>
//     );
// };
// export default Index;