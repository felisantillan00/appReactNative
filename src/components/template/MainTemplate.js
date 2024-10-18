import React from 'react';
import { View } from 'react-native';
import Footer from '../organisms/FooterNav';

const MainTemplate = ({ children }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {children} {/* Aquí se inserta el contenido de las pantallas */}
            </View>
            <Footer />
        </View>
    );
};

export default MainTemplate;
