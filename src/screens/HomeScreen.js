import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import SongItem from '../components/SongItem';

// Sample data - replace with your actual data source
const sampleSongs = [
  { id: '1', title: 'Shape of You', artist: 'Ed Sheeran' },
  { id: '2', title: 'Blinding Lights', artist: 'The Weeknd' },
  { id: '3', title: 'Dance Monkey', artist: 'Tones and I' },
  { id: '4', title: 'Someone You Loved', artist: 'Lewis Capaldi' },
  { id: '5', title: 'Stay', artist: 'The Kid LAROI & Justin Bieber' },
  { id: '6', title: 'Bad Guy', artist: 'Billie Eilish' },
  { id: '7', title: 'Levitating', artist: 'Dua Lipa' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Popular Songs</Text>
      <FlatList
        data={sampleSongs}
        renderItem={({ item }) => <SongItem song={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    color: '#1a1a1a',
  },
  listContainer: {
    paddingVertical: 8,
  },
});

export default HomeScreen;
