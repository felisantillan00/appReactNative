// ImageModal.js
import React from 'react';
import { View, Modal, Image, TouchableOpacity, Text } from 'react-native';
import styles from '../../style/StyleImageModal';

const ImageModal = ({ visible, images, currentIndex, onClose }) => {
    const goToNextImage = () => {
        if (currentIndex < images.length - 1) {
            // Mueve al siguiente índice
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToPreviousImage = () => {
        if (currentIndex > 0) {
            // Mueve al índice anterior
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose} // Cierra el modal al presionar el botón de retroceso
        >
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
                    <Text style={styles.modalCloseText}>X</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.leftArrow} onPress={goToPreviousImage}>
                    <Text style={styles.arrowText}>{'<'}</Text>
                </TouchableOpacity>
                
                <Image 
                    source={{ uri: images[currentIndex] }} // Muestra la imagen actual
                    style={styles.modalImage}
                    resizeMode="contain" // Ajustar la imagen
                />
                
                <TouchableOpacity style={styles.rightArrow} onPress={goToNextImage}>
                    <Text style={styles.arrowText}>{'>'}</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default ImageModal;
