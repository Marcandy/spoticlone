import React from "react";
import { View, Text, Image } from 'react-native';
import { Song } from '../../types';
import styles from './styles';

export type SongListItemProp = {
    song: Song
}

const SongListItem = (props: SongListItemProp) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: props.song.imageUri }} style={styles.image}/>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{props.song.title}</Text>
                <Text style={styles.artist}>{props.song.artist}</Text>
            </View>
            
        </View>
    )
}


export default SongListItem;