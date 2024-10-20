import React from 'react';
import { View, FlatList} from 'react-native';
import PropertyDetails from '../components/molecules/PropertyDetails';
import FooterNav from '../components/organisms/FooterNav';
import styleContainer from '../style/StyleScreenContainer'
import styles from '../style/StyleScreenIndex';

const Index = ({ navigation, route }) => {
    // Lista de propiedades con imágenes específicas
    const properties = [
        { 
            id: 1, 
            address: '123 Calle Falsa, Ciudad', 
            price: 250000, 
            images: [
                "https://images.unsplash.com/photo-1559494007-9f5847c49d94",
                "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85"
            ],
            forSale: true, 
            forRent: false 
        },
        { 
            id: 2, 
            address: '456 Avenida Real, Ciudad', 
            price: 300000, 
            images: [
                "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
                "https://images.unsplash.com/photo-1525183995014-bd94c0750cd5"
            ],
            forSale: false, 
            forRent: true 
        },
        { 
            id: 3, 
            address: '789 Boulevard, Ciudad', 
            price: 150000, 
            images: [
                "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
                "https://images.unsplash.com/photo-1525183995014-bd94c0750cd5"
            ],
            forSale: true, 
            forRent: true 
        },
    ];    
    // Suponemos que el usuario está logueado
    const isLoggedIn = true; // Cambia esto según tu lógica de autenticación
    return (
        <View style={styleContainer.container}>
            <FlatList
                data={properties}
                renderItem={({ item }) => (
                    <PropertyDetails 
                        property={item} 
                        isLoggedIn={isLoggedIn} 
                    />
                )}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.scrollContent}
            />
            <FooterNav navigation={navigation} route={route} />
        </View>
    );
};
export default Index;