import * as React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';

import AlbumCategory from '../components/AlbumCategory';
import AlbumCategories from '../data/AlbumCategories';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={AlbumCategories}
        renderItem={ ({ item }) => (
          <AlbumCategory
            title={item.title}
            albums={item.albums}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
