// import React, { useState, useEffect } from 'react';
// import { Camera, CameraType } from 'expo-camera/legacy';
// import { Text, View, TouchableOpacity, Image} from 'react-native';
// import styles from '../style/StyleCameraComponent';

// const CameraComponent = (navigation) => {
//     const [hasPermission, setHasPermission] = useState(null);
//     const [cameraRef, setCameraRef] = useState(null);
//     const [facing, setFacing] = useState(CameraType.back);
//     const [photo, setPhoto] = useState(null);

//     useEffect(() => { (async () => {
//             const { status } = await Camera.requestCameraPermissionsAsync();
//             setHasPermission(status === 'granted');
//         })();
//     }, []);

//     if (hasPermission === null) {
//         return <View />;
//     }
//     if (hasPermission === false) {
//         return <Text>No access to camera</Text>;
//     }

//     const takePicture = async () => {
//         if (cameraRef) {
//             let photo = await cameraRef.takePictureAsync();
//             setPhoto(photo.uri);
//         }
//     };

//     const toggleCameraFacing = () => {
//         setFacing(current => (
//             current === CameraType.back
//                 ? CameraType.front
//                 : CameraType.back
//         ));
//     };

//     return (
//         <View style={styles.container}>
//             <Camera style={styles.camera} type={facing} ref={ref => setCameraRef(ref)}>
//                 <View style={styles.buttonContainer}>
//                     <TouchableOpacity style={styles.button} onPress={takePicture}>
//                         <Text style={styles.text}>Take Picture</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//                         <Text style={styles.text}>Flip Camera</Text>
//                     </TouchableOpacity>
//                 </View>
//             </Camera>
//             {photo && <Image source={{ uri: photo }} style={styles.image} />}
//         </View>
//     );
// }
// export default CameraComponent;
import React, { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera/legacy';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/StyleCameraComponent';

const CameraComponent = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [facing, setFacing] = useState(CameraType.back);
    const [photo, setPhoto] = useState(null);
    const navigation = useNavigation(); // Hook para obtener la navegación

    useEffect(() => { 
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const takePicture = async () => {
        if (cameraRef) {
            let photo = await cameraRef.takePictureAsync();
            setPhoto(photo.uri);
        }
    };

    const toggleCameraFacing = () => {
        setFacing(current => (
            current === CameraType.back ? CameraType.front : CameraType.back
        ));
    };

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={facing} ref={ref => setCameraRef(ref)}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={takePicture}>
                        <Text style={styles.text}>Take Picture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
            {photo && <Image source={{ uri: photo }} style={styles.image} />}
        </View>
    );
}

export default CameraComponent;
