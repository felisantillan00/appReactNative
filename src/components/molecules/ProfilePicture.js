import React from 'react';
import defaultProfilePicture from '../../img/SignUpIcon.png'; // Ajusta la ruta
import Image from '../atoms/Image'
import styles from '../../style/StyleProfilePicture';

const ProfilePicture = ({ picture }) => {
    return (
        <Image
            source={picture ? { uri: picture } : defaultProfilePicture}
            style={styles.profilePicture}
        />
    );
};
export default ProfilePicture;