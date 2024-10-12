// components/molecules/CarouselItem.js
import React from 'react';
import {Animated} from 'react-native';
import CustomImage from '../atoms/Image';
import CustomText from '../atoms/Text';
import styles from '../../style/StyleCarrouselItem';

const CarouselItem = ({ uri, title, translateY }) => {
    return (
        <Animated.View style={[styles.card, { transform: [{ translateY }] }]}>
            <CustomImage uri={uri} />
            <CustomText>{title}</CustomText>
        </Animated.View>
    );
};
export default CarouselItem;