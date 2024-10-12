import React from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.7;

const Backdrop = ({ data, scrollX }) => {
    return (
        <View style={[StyleSheet.absoluteFillObject, { height: height * 0.6, width }]}>
            {data.map((item, index) => {
                const inputRange = [
                    (index - 1) * ITEM_WIDTH,
                    index * ITEM_WIDTH,
                    (index + 1) * ITEM_WIDTH,
                ];
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 1, 0],
                });
                return (
                    <Animated.Image
                        key={item.uri}
                        source={{ uri: item.uri }}
                        style={[StyleSheet.absoluteFillObject, { opacity }]}
                        blurRadius={10}
                    />
                );
            })}
        </View>
    );
};
export default Backdrop;