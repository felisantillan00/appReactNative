import React from 'react';
import { View } from 'react-native';
import styleContainer from '../style/StyleScreenContainer';
import PropertyDetailsFull from '../components/molecules/PropertyDetailsFull'; 

const InfoProperty = ({route }) => {
    const { propertyId } = route.params;  // Destructura el parámetro `propertyId` desde route
    return (
        <View>
            <PropertyDetailsFull propertyId={propertyId} />
        </View>
    );
};
export default InfoProperty;
