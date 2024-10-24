import {StyleSheet, Dimensions} from 'react-native';
const MAX_WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    profilePicture: {
        width: MAX_WIDTH * 0.2,
        height: MAX_WIDTH * 0.2,
        borderRadius: 50,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#E6E6E6',
    },
});
export default styles;