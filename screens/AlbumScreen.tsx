import React from 'react';
import { useEffect } from 'react';
import { View, Text } from "react-native";
import { useRoute } from '@react-navigation/core';

import AlbumDetails from './../data/AlbumDetails';
import SongListItem from '../components/SongListItem.tsx';


const AlbumScreen = () => {

    const route = useRoute();

    useEffect(()=> {
        console.log(route)
    }, []);

    return (
        <View>
            <Text>This is the Album screen</Text>
            <SongListItem
                song={AlbumDetails.songs[0]}
            />
        </View>
    )
}

export default AlbumScreen;