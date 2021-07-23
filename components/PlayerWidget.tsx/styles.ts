import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: 'green',
        position: 'absolute',
        bottom: '5%'
    },
    image: {
        width: '100%',
        height: 60
    },
    title: {
        color: 'white',
        fontSize: 22
    },
    artist: {
        color: 'lightgray',
        fontSize: 17
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 15
    }
});

export default styles;