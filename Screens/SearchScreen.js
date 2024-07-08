import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import HorizontalList from '../components/HorizontalList';

const trendingHashtags = ['#trending', '#reactnative', '#mobileapp', '#dev', '#javascript'];
const topCommunities = ['Community 1', 'Community 2', 'Community 3', 'Community 4'];

const SearchScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Trending Hashtags</Text>
      <HorizontalList data={trendingHashtags} />

      <Text style={styles.title}>Top Communities</Text>
      <HorizontalList data={topCommunities} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default SearchScreen;
