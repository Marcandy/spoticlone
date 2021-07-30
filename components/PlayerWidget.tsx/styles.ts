import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        backgroundColor: '#131313',
        position: 'absolute',
        bottom: 45,
        width: '100%',
        borderWidth: 3,
        borderColor: 'black'
    },
    row: {
        flexDirection: 'row',
    },
    progress: {
        height: 2,
        backgroundColor: '#bcbcbc'
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 5
    },
    artist: {
        color: 'lightgray',
        fontSize: 18,
    },
    nameContainer: {
        marginLeft: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-around'
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    }
});

export default styles;