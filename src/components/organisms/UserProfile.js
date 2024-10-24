import {View, TouchableOpacity, Text} from 'react-native';
import styles from '../../style/StyleUserProfile';
import ProfilePicture from '../molecules/ProfilePicture';
import Username from '../molecules/Username';
import Email from '../molecules/Email';
import CameraComponent from '../../screens/CameraComponent';

const UserProfile = ({ user = {}, onUpdateProfilePic, onAddProperty, onSignOut }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <ProfilePicture picture={user.profilePicture} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.selfieButton]}
                        onPress={CameraComponent}>
                        <Text style={styles.buttonText}>Sacar selfie</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.modifyButton]}
                        onPress={onUpdateProfilePic}>
                        <Text style={styles.buttonText}>Modificar mi foto de perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Username name={user.name} />
            <Email email={user.email} />
            <TouchableOpacity
                style={[styles.button, styles.signOutButton]}
                onPress={onSignOut}>
                <Text style={styles.buttonText}>Editar información del perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.addPropertyButton]}
                onPress={onAddProperty}>
                <Text style={styles.buttonText}>Agregar una propiedad</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.signOutButton]}
                onPress={onSignOut}>
                <Text style={styles.buttonText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    );
};
export default UserProfile;