import React from 'react';
import { Text } from 'react-native';

import { Album } from '../../types';

export type AlbumHeaderProps = {
    album: Album;
}


const AlbumHeader = (prop: AlbumHeaderProps) => {

    return (
        <Text>Album Header</Text>
    )
}

export default AlbumHeader;