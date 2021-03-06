import React from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/core';

import AlbumDetails from './../data/AlbumDetails';
import SongListItem from '../components/SongListItem.tsx';
import { FlatList } from 'react-native-gesture-handler';
import AlbumHeader  from '../components/AlbumHeader';


const AlbumScreen = () => {

    const route = useRoute();

    useEffect(()=> {
        console.log(route)
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={AlbumDetails.songs}
                renderItem={({ item }) => <SongListItem song={item} /> }
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <AlbumHeader album={AlbumDetails} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black'
    },
})

export default AlbumScreen;