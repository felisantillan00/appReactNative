import React from 'react';
import {Image} from 'react-native';
import styles from '../../style/StyleCarouselImage';

const CarouselImage = ({ source }) => {
    return <Image source={source} style={styles.image} />;
};
export default CarouselImage;