import React from 'react';
import { View, FlatList } from 'react-native';
import PropertyDetails from '../components/molecules/PropertyDetailsMin';
import FooterNav from '../components/organisms/FooterNav';
import styleContainer from '../style/StyleScreenContainer';
import styles from '../style/StyleScreenIndex';
import propertiesData from '../../tmp/properties.json'; // Importa las propiedades del archivo JSON

const EnVenta = ({ navigation, route }) => {
    // Filtrar solo propiedades que están en venta
    const propertiesForSale = propertiesData.filter(property => property.forSale);
    // Suponemos que el usuario está logueado
    const isLoggedIn = true;
    return (
        <View style={styleContainer.container}>
            <FlatList
                data={propertiesForSale} // Usa las propiedades filtradas para venta
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
export default EnVenta;