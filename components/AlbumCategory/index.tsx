import React from 'react';
import { View, Text } from 'react-native';
import { Album } from '../../types';
import { styles } from './styles';

export type AlbumCategoryProps = {
    title: string,
    albums: [Album]
}

const AlbumCategory = (props)=> (
    <View>
        <Text>  </Text>
        <Text> </Text>
    </View>
);

export default AlbumCategory;