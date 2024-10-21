import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import PropertyDetails from '../components/molecules/PropertyDetails';
import FooterNav from '../components/organisms/FooterNav';
import FloatingButton from '../components/atoms/FloatingButton';
import propertiesData from '../../tmp/properties.json'; // Importa los datos del archivo JSON
import styleContainer from '../style/StyleScreenContainer';
import styles from '../style/StyleScreenIndex';

const Index = ({ navigation, route }) => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        // Carga los datos del archivo JSON
        setProperties(propertiesData);
    }, []);

    const handleContactPress = () => {
        navigation.navigate('Contacto'); // Cambia a la ruta deseada
    };
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
            <FloatingButton onPress={handleContactPress} />
            <FooterNav navigation={navigation} route={route} />
        </View>
    );
};

export default Index;