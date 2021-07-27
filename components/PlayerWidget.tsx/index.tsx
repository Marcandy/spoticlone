import React, { useEffect } from "react";
import { View, Text, Image } from 'react-native';
import { Song } from '../../types';
import styles from './styles';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Audio } from 'expo-av'


const song = {
    id: '2',
    uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
    title: 'Lorem Ipsum',
    artist: 'Artist 2',
};



const PlayerWidget = () => {
    const onPlayBackStatusUpdate = (status) => {
        console.log(status)
    }
  
    const playSong = async () => {
        const { sound } = Audio.Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: true },
            onPlayBackStatusUpdate,
        )
    }

    useEffect(() => {
        playSong()
    }, [])

    return (
        <View style={styles.container}>
            <Image source={{uri: song.imageUri }} style={styles.image}/>
            <View style={styles.rightContainer}>        
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <AntDesign name='hearto' size={32} color={'white'} />
                    <FontAwesome name='play' size= {32} color={'white'} />
                </View>
            </View>
            
        </View>
    )
}


export default PlayerWidget;