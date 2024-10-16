import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import HeaderNav from '../components/organisms/HeaderNav'; // Importamos el encabezado
import DolarView from '../components/organisms/DolarView';
import styles from '../style/StyleScreenDolar';
import stylesContainer from '../style/StyleScreenContainer';

const Dolar = ({navigation}) => {
    const [dolarOficial, setDolarOficial] = useState({ valor: null, fecha: null });
    const [dolarBlue, setDolarBlue] = useState({ valor: null, fecha: null });
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchDolarValues = async () => {
            try {
                const response = await axios.get('https://dolarapi.com/v1/dolares');
                const oficial = response.data.find(dolar => dolar.casa === 'oficial');
                const blue = response.data.find(dolar => dolar.casa === 'blue');
                if (oficial && blue) {
                    setDolarOficial({ valor: oficial, fecha: oficial.fechaActualizacion });
                    setDolarBlue({ valor: blue, fecha: blue.fechaActualizacion });
                } else {
                    console.error('No se encontraron valores para el Dólar Oficial o Blue');
                }
            } catch (error) {
                console.error('Error al obtener los valores del dólar:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchDolarValues();
    }, []);
    const formatFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
        const opcionesHora = { hour: '2-digit', minute: '2-digit' };
        return `${fecha.toLocaleDateString('es-ES', opcionesFecha)}, ${fecha.toLocaleTimeString('es-ES', opcionesHora)}`;
    };
    return (
        <View style={stylesContainer.container}>
            {loading ? (
                <Text style={styles.text}>Cargando...</Text>
            ) : (
                <DolarView 
                    dolarOficial={{ ...dolarOficial.valor, fecha: formatFecha(dolarOficial.fecha) }} 
                    dolarBlue={{ ...dolarBlue.valor, fecha: formatFecha(dolarBlue.fecha) }}
                />
            )}
            <HeaderNav navigation={navigation} />
        </View>
    );
};
export default Dolar;