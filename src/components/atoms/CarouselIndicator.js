import React from 'react';
import { View } from 'react-native';
import styles from '../../style/StyleCarouselIndicator';

const CarouselIndicator = ({ isActive }) => {
    return (
        <View style={[styles.indicator, isActive ? styles.activeIndicator : undefined]} />
    );
};
export default CarouselIndicator;