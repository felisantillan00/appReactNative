import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        margin: 20,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 20,
    },
});
export default styles;