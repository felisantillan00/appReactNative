import React from 'react';
import { View } from 'react-native';
import TextInfo from '../atoms/TextInfo';

const DolarDetails = ({ tipo, compra, venta, fecha }) => {
    return (
        <View>
            <TextInfo label={`${tipo} - Compra`} value={`$${compra}`} />
            <TextInfo label={`${tipo} - Venta`} value={`$${venta}`} />
            <TextInfo label={`${tipo} - Fecha de Actualización`} value={fecha} />
        </View>
    );
};
export default DolarDetails;