// components/atoms/Image.js
import React from 'react';
import {Image} from 'react-native';
import styles from '../../style/StyleImage';

const Image = ({ uri, style }) => {
    return <Image source={{ uri }} style={[styles.image, style]} />;
};

export default Image;
