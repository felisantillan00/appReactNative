import {View, Animated, Dimensions, Image, Text} from 'react-native';
import React from 'react';
import styles from '../../style/StyleImageCarousel'; // o donde tengas los estilos de este componente
const {width} = Dimensions.get('window');
const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ImageCarousel = ({ scrollX, images }) => {
    return (
        <View>
            <Animated.FlatList
                data={images}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToAlignment="start"
                snapToInterval={ANCHO_CONTENEDOR}
                decelerationRate={0}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{
                    paddingHorizontal: ESPACIO_CONTENEDOR,
                }}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * ANCHO_CONTENEDOR,
                        index * ANCHO_CONTENEDOR,
                        (index + 1) * ANCHO_CONTENEDOR,
                    ];
                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, -50, 0],
                    });
                    return (
                        <View style={{ width: ANCHO_CONTENEDOR }}>
                            <Animated.View style={[styles.carouselItem, { transform: [{ translateY }] }]}>
                                <Image source={{ uri: item.uri }} style={styles.image} />
                                <Text style={styles.title}>{item.title}</Text>
                            </Animated.View>
                        </View>
                    );
                }}
            />
        </View>
    );
};
export default ImageCarousel;