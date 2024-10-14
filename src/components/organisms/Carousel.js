// import React from 'react';
// import {View, Image, ScrollView} from 'react-native';
// import styles from '../../style/StyleCarousel';

// const Carousel = ({ images }) => {
//     if (!images || images.length === 0) {
//         return null; // Retorna null si no hay imágenes
//     }
//     return (
//         <ScrollView horizontal pagingEnabled>
//             {images.map((image, index) => (
//                 <View key={index} style={styles.imageContainer}>
//                     <Image source={{ uri: image }} style={styles.image} />
//                 </View>
//             ))}
//         </ScrollView>
//     );
// };
// export default Carousel;

// import React, { useState } from 'react';
// import { View, Image, ScrollView, Dimensions } from 'react-native';
// import CarouselIndicator from '../atoms/CarouselIndicator'; // Usa el componente que ya creaste
// import styles from '../../style/StyleCarousel';
// const { width } = Dimensions.get('window');

// const Carousel = ({ images }) => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     const handleScroll = (event) => {
//         const scrollPosition = event.nativeEvent.contentOffset.x;
//         const index = Math.round(scrollPosition / width);
//         setActiveIndex(index);
//     };

//     return (
//         <View>
//             <ScrollView
//                 horizontal
//                 pagingEnabled
//                 showsHorizontalScrollIndicator={false}
//                 onScroll={handleScroll}
//                 scrollEventThrottle={16}
//             >
//                 {images.map((image, index) => (
//                     <View key={index} style={styles.imageContainer}>
//                         <Image source={{ uri: image }} style={styles.image} />
//                     </View>
//                 ))}
//             </ScrollView>
//             {/* Indicadores */}
//             <View style={styles.indicatorContainer}>
//                 {images.map((_, index) => (
//                     <CarouselIndicator key={index} isActive={index === activeIndex} />
//                 ))}
//             </View>
//         </View>
//     );
// };

// export default Carousel;

import React, { useState, useEffect, useRef } from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';
import CarouselIndicator from '../atoms/CarouselIndicator';
import styles from '../../style/StyleCarousel';

const { width } = Dimensions.get('window');
const AUTO_SCROLL_INTERVAL = 6000; // Tiempo en milisegundos entre cada cambio de imagen

const Carousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollViewRef = useRef(null);
    // Función para manejar el cambio automático de imágenes
    const handleAutoScroll = () => {
        let nextIndex = (activeIndex + 1) % images.length; // Loop: si es el último índice, vuelve al inicio
        scrollViewRef.current.scrollTo({ x: nextIndex * width, animated: true });
        setActiveIndex(nextIndex);
    };
    // Movimiento automático con intervalo
    useEffect(() => {
        const interval = setInterval(handleAutoScroll, AUTO_SCROLL_INTERVAL);
        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [activeIndex]);
    // Función para manejar el scroll manual
    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveIndex(index);
    };
    // Función para manejar el scroll manual cíclico
    const handleScrollEnd = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        if (index === images.length) {
            // Si estamos en la última imagen y se desliza hacia la derecha
            scrollViewRef.current.scrollTo({ x: 0, animated: false }); // Regresar a la primera imagen
            setActiveIndex(0);
        } else if (index === -1) {
            // Si estamos en la primera imagen y se desliza hacia la izquierda
            scrollViewRef.current.scrollTo({ x: (images.length - 1) * width, animated: false }); // Ir a la última imagen
            setActiveIndex(images.length - 1);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <View>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                onMomentumScrollEnd={handleScrollEnd} // Cambiado aquí
                scrollEventThrottle={16}
            >
                {images.map((image, index) => (
                    <View key={index} style={styles.imageContainer}>
                        <Image source={{ uri: image }} style={styles.image} />
                    </View>
                ))}
            </ScrollView>
            {/* Indicadores */}
            <View style={styles.indicatorContainer}>
                {images.map((_, index) => (
                    <CarouselIndicator key={index} isActive={index === activeIndex} />
                ))}
            </View>
        </View>
    );
};

export default Carousel;


