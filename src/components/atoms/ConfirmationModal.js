// atoms/ConfirmationModal.js
import React, { useEffect } from 'react';
import {Modal, View, Text} from 'react-native';
import styles from '../../style/StyleConfirmationModal';

const ConfirmationModal = ({ visible, onClose }) => {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000); // Cierra el modal después de 3 segundos
            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>¡Su calificación fue enviada exitosamente!</Text>
                    <Text style={styles.modalText}>¡Muchas Gracias!</Text>
                </View>
            </View>
        </Modal>
    );
};
export default ConfirmationModal;