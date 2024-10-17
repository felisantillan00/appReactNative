import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    label: {
        position: 'absolute',
        left: 0,
        top: 15,
        fontSize: 16,
        color: '#aaa',
        transition: '0.2s',
    },
    labelFocused: {
        top: -10,
        fontSize: 12,
        color: '#34495e',
    },
    input: {
        height: 40,
        fontSize: 16,
        paddingLeft: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#34495e',
    },
});
export default styles;