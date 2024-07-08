import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const HorizontalList = ({ data }) => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default HorizontalList;
