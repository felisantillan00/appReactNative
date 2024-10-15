import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

import HeaderNav from '../components/organisms/HeaderNav'; // Importamos el encabezado
import styles from '../style/StyleScreenDolar';
import styleContainer from '../style/StyleContainer'

const Dolar = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: 'https://dolarhoy.com/i/cotizaciones/dolar-bancos-y-casas-de-cambio' }}
                style={{ width: 320, height: 260 }}
            />
        </View>
    );
};
export default Dolar;