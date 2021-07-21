import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        margin: 15
    },
    image: {
        width: 200,
        height: 200,
        margin: 10
    },
    name: {
        fontSize: 27,
        color: 'white',
        fontWeight: "bold"
    },
    creatorContainer: {
        flexDirection: "row",
        marginBottom: 10
    },
    creator: {
        color: 'lightgray',
        margin: 5,
        fontSize: 15
    },
    likes: {
        color: 'lightgray',
        margin: 5,
        fontSize: 15
    },
    button: {
        backgroundColor: '#1CD05D',
        borderRadius: 25,
        height: 55,
        width: 145,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default styles;