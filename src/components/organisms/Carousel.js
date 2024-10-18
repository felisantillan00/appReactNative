    import React, { useState, useEffect, useRef } from 'react';
    import { View, Image, ScrollView, Dimensions } from 'react-native';
    import CarouselIndicator from '../atoms/CarouselIndicator';
    import styles from '../../style/StyleCarousel';

    const { width } = Dimensions.get('window');

    const Carousel = ({ images }) => {
        // Duplicamos las imágenes
        const extendedImages = [images[images.length - 1], ...images, images[0]];
        const [activeIndex, setActiveIndex] = useState(1); // Empezamos en la segunda imagen (primera real)
        const scrollViewRef = useRef(null);

        const handleScroll = (event) => {
            const scrollPosition = event.nativeEvent.contentOffset.x;
            const index = Math.round(scrollPosition / width);
            setActiveIndex(index);
        };

        // Detectamos cuándo llegamos al inicio o al final de las imágenes
        useEffect(() => {
            if (activeIndex === 0) {
                // Si estamos en la imagen duplicada al principio, saltamos a la última real
                scrollViewRef.current.scrollTo({ x: width * (images.length), animated: false });
                setActiveIndex(images.length);
            } else if (activeIndex === images.length + 1) {
                // Si estamos en la imagen duplicada al final, saltamos a la primera real
                scrollViewRef.current.scrollTo({ x: width, animated: false });
                setActiveIndex(1);
            }
        }, [activeIndex]);

        // Auto-scroll con intervalo
        useEffect(() => {
            const intervalId = setInterval(() => {
                scrollViewRef.current.scrollTo({ x: (activeIndex + 1) * width, animated: true });
            }, 3000); // 3 segundos entre cada imagen
            return () => clearInterval(intervalId);
        }, [activeIndex]);

        return (
            <View>
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
                {/* Indicadores */}
                <View style={styles.indicatorContainer}>
                    {images.map((_, index) => (
                        <CarouselIndicator key={index} isActive={index === (activeIndex - 1)} />
                    ))}
                </View>
            </View>
        );
    };

    export default Carousel;
        