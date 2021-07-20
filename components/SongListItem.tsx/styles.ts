import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10
    },
    image: {
        width: 60,
        height: 60
    },
    title: {
        color: 'white',
        fontSize: 24
    },
    artist: {
        color: 'lightgray',
        fontSize: 18
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 15
    }
});

export default styles;