import React from "react";
import { View, Text, Image } from 'react-native';
import { Song } from '../../types';
import styles from './styles';

const song = {
    id: '2',
    imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
    title: 'Lorem Ipsum',
    artist: 'Artist 2',
};

const PlayerWidget = () => {
    return (
        <View style={styles.container}>
            <Image source={{uri: song.imageUri }} style={styles.image}/>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>   
        </View>
    )
}


export default PlayerWidget;