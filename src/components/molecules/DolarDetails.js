import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../style/StyleDolarDetails';

const DolarDetails = ({ tipo, compra, venta, fecha }) => {
    return (
        <View style={styles.card}>
            {/* Título del tipo de dólar */}
            <Text style={styles.tipo}>{tipo}</Text>
            {/* Sección de compra y venta */}
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.label}>Compra</Text>
                    <Text style={styles.value}>${compra}</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.column}>
                    <Text style={styles.label}>Venta</Text>
                    <Text style={styles.value}>${venta}</Text>
                </View>
            </View>
            {/* Fecha de actualización */}
            <Text style={styles.fecha}>Actualizado: {fecha}</Text>
        </View>
    );
};
export default DolarDetails;