import React from 'react';
import { View } from 'react-native';
import Image from '../atoms/Image';
import CarouselIndicator from '../atoms/CarouselIndicator';

const CarouselItem = ({ imageSource, isActive }) => {
    return (
        <View>
            {/* Componente que muestra la imagen */}
            <Image source={imageSource} />
            {/* Componente que muestra el indicador de posición */}
            <CarouselIndicator isActive={isActive} />
        </View>
    );
};
export default CarouselItem;