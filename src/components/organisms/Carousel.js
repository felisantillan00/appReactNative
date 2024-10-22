import React, { useState, useEffect, useRef } from 'react';
import { View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import CarouselItem from '../molecules/CarouselItem';
import styles from '../../style/StyleCarousel';
const { width } = Dimensions.get('window');

const Carousel = ({ images }) => {
    const extendedImages = [images[images.length - 1], ...images, images[0]];
    const [activeIndex, setActiveIndex] = useState(1);
    const scrollViewRef = useRef(null);

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveIndex(index);
    };

    const goToNext = () => {
        if (activeIndex < extendedImages.length - 1) {
            scrollViewRef.current.scrollTo({ x: (activeIndex + 1) * width, animated: true });
        }
    };

    const goToPrevious = () => {
        if (activeIndex > 0) {
            scrollViewRef.current.scrollTo({ x: (activeIndex - 1) * width, animated: true });
        }
    };

    useEffect(() => {
        if (activeIndex === 0) {
            scrollViewRef.current.scrollTo({ x: width * (images.length), animated: false });
            setActiveIndex(images.length);
        } else if (activeIndex === images.length + 1) {
            scrollViewRef.current.scrollTo({ x: width, animated: false });
            setActiveIndex(1);
        }
    }, [activeIndex]);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         scrollViewRef.current.scrollTo({ x: (activeIndex + 1) * width, animated: true });
    //     }, 8000);
    //     return () => clearInterval(intervalId);
    // }, [activeIndex]);

    return (
        <View style={{ position: 'relative' }}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {extendedImages.map((image, index) => (
                    <View key={index} style={styles.imageContainer}>
                        <Image source={{ uri: image }} style={styles.image} />
                    </View>
                ))}
            </ScrollView>
            {/* Botones de navegación */}
            <TouchableOpacity style={styles.buttonLeft} onPress={goToPrevious}>
                <Image source={require('../../img/FlechaDerecha.png')} style={styles.buttonImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRight} onPress={goToNext}>
                <Image source={require('../../img/FlechaIzquierda.png')} style={styles.buttonImage} />
            </TouchableOpacity>
            {/* Indicadores */}
            <View style={styles.indicatorContainer}>
                {images.map((_, index) => (
                    <CarouselItem key={index} isActive={index === (activeIndex - 1)} />
                ))}
            </View>
        </View>
    );
};
export default Carousel;