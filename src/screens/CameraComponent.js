// import React, { useState, useEffect, useRef } from 'react';
// import { Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
// import Constants from 'expo-constants';
// import { Camera } from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';
// import Button from '../components/atoms/Button';

// const CameraComponent = () => {
//     const [hasCameraPermission, setHasCameraPermission] = useState(null);
//     const [image, setImage] = useState(null);
//     const [type, setType] = useState(Camera.Constants.Type.back);
//     const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
//     const cameraRef = useRef(null);

//     useEffect(() => {
//         (async () => {
//             await MediaLibrary.requestPermissionsAsync();
//             const cameraStatus = await Camera.requestCameraPermissionsAsync();
//             setHasCameraPermission(cameraStatus.status === 'granted');
//         })();
//     }, []);

//     const takePicture = async () => {
//         if (cameraRef.current) {
//             try {
//                 const data = await cameraRef.current.takePictureAsync();
//                 console.log(data);
//                 setImage(data.uri);
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     };

//     const savePicture = async () => {
//         if (image) {
//             try {
//                 const asset = await MediaLibrary.createAssetAsync(image);
//                 alert('Picture saved!');
//                 setImage(null);
//                 console.log('saved successfully');
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     };

//     if (hasCameraPermission === false) {
//         return <Text>No access to camera</Text>;
//     }

//     return (
//         <View style={styles.container}>
//             {!image ? (
//                 <Camera
//                     style={styles.camera}
//                     type={type}
//                     ref={cameraRef}
//                     flashMode={flash}
//                 >
//                     <View
//                         style={{
//                             flexDirection: 'row',
//                             justifyContent: 'space-between',
//                             paddingHorizontal: 30,
//                         }}
//                     >
//                         <Button
//                             title=""
//                             icon="retweet"
//                             onPress={() => {
//                                 setType(
//                                     type === Camera.Constants.Type.back
//                                         ? Camera.Constants.Type.front
//                                         : Camera.Constants.Type.back
//                                 );
//                             }}
//                         />
//                         <Button
//                             onPress={() =>
//                                 setFlash(
//                                     flash === Camera.Constants.FlashMode.off
//                                         ? Camera.Constants.FlashMode.on
//                                         : Camera.Constants.FlashMode.off
//                                 )
//                             }
//                             icon="flash"
//                             color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#fff'}
//                         />
//                     </View>
//                 </Camera>
//             ) : (
//                 <Image source={{ uri: image }} style={styles.camera} />
//             )}
//             <View style={styles.controls}>
//                 {image ? (
//                     <View
//                         style={{
//                             flexDirection: 'row',
//                             justifyContent: 'space-between',
//                             paddingHorizontal: 50,
//                         }}
//                     >
//                         <Button title="Re-take" onPress={() => setImage(null)} icon="retweet" />
//                         <Button title="Save" onPress={savePicture} icon="check" />
//                     </View>
//                 ) : (
//                     <Button title="Take a picture" onPress={takePicture} icon="camera" />
//                 )}
//             </View>
//         </View>
//     );
// };

// export default CameraComponent;
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         paddingTop: Constants.statusBarHeight,
//         backgroundColor: '#000',
//         padding: 8,
//     },
//     controls: {
//         flex: 0.5,
//     },
//     button: {
//         height: 40,
//         borderRadius: 6,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text: {
//         fontWeight: 'bold',
//         fontSize: 16,
//         color: '#E9730F',
//         marginLeft: 10,
//     },
//     camera: {
//         flex: 5,
//         borderRadius: 20,
//     },
//     topControls: {
//         flex: 1,
//     },
// });
import { Camera } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraComponent() {
    const [facing, setFacing] = useState(Camera.Constants.Type.back); // Usa Camera.Constants.Type
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="Grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back));
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={facing}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});
