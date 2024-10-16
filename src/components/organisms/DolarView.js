import React from 'react';
import { View } from 'react-native';
import DolarDetails from '../molecules/DolarDetails';
const DolarView = ({ dolarOficial, dolarBlue }) => {
    return (
        <View>
            {dolarBlue && (
                <DolarDetails 
                    tipo="Dólar Blue"
                    compra={dolarBlue.compra}
                    venta={dolarBlue.venta}
                    fecha={dolarBlue.fecha}
                />
            )}
            {dolarOficial && (
                <DolarDetails 
                    tipo="Dólar Oficial"
                    compra={dolarOficial.compra}
                    venta={dolarOficial.venta}
                    fecha={dolarOficial.fecha}
                />
            )}
        </View>
    );
};
export default DolarView;