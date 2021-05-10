import React from 'react';
import { View, Text, Image } from 'react-native';

export type AlbumProps = {
    album: {
        id: String,
        imageUri: String,
        artistsHeadline: String
    }
}  

const Album = (props: AlbumProps) => (
    <View>
    </View>
);

export default Album