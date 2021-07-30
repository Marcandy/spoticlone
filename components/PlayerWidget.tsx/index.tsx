import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacityBase } from 'react-native';
import { Song } from '../../types';
import styles from './styles';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Audio } from 'expo-av';
import { TouchableOpacity } from "react-native";
import { objectOf } from "prop-types";


const song = {
    id: '2',
    uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
    title: 'Lorem Ipsum',
    artist: 'Artist 2',
};



const PlayerWidget = () => {
    const { Sound } = Audio;
    const [ sound, setSound ] = useState<Sound|null>(null);
    const [ isPlaying, setIsPlaying ] = useState<boolean>(true);
    const [ duration, setDuration ] = useState<Number|null>(null);
    const [ position, setPosition ] = useState<Number|null>(null);
    
    const onPlayBackStatusUpdate = (status: object) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }
  
    const playSong = async () => {
        if (sound) {
            await sound.unloadAsync();
        }
        const { sound: newSound } = await Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: isPlaying },
            onPlayBackStatusUpdate,
        )

        setSound(newSound);
    }

    const onPlayPauseButton = async () => {
        if (!sound) {
            return;
        }
        if(isPlaying) {
            await sound.pauseAsync()
        } else {
            await sound.playAsync();
        }
    }

    useEffect(() => {
        playSong()
    }, [])
    
    const getProgress = () => {
        if (sound == null || duration === null || position === null) {
            return 0
        }

        return (position / duration) * 100;
    }
    return (
        <View style={styles.container}>
            <View style={[styles.progress, { width: `${getProgress()}%`} ]}/>
            <View style={styles.row}>
                <Image source={{uri: song.imageUri }} style={styles.image}/>
                <View style={styles.rightContainer}>        
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>
                    <View style={styles.iconsContainer}>
                        <AntDesign name='hearto' size={32} color={'white'} />
                        <TouchableOpacity onPress={onPlayPauseButton}>
                            <FontAwesome name={isPlaying ? 'pause' : 'play'} size= {32} color={'white'} />
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
            
        </View>
    )
}


export default PlayerWidget;