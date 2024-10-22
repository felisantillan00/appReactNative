import React from 'react';
import { View } from 'react-native';
import CarouselImage from '../atoms/CarouselImage';
import CarouselIndicator from '../atoms/CarouselIndicator';

const CarouselItem = ({ imageSource, isActive }) => {
    return (
        <View>
            {/* Componente que muestra la imagen */}
            <CarouselImage source={imageSource} />
            {/* Componente que muestra el indicador de posición */}
            <CarouselIndicator isActive={isActive} />
        </View>
    );
};
export default CarouselItem;