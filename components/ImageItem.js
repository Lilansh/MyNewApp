import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ImageItem = ({ source }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: source }} style={styles.image} />
      <Text style={styles.textTop}></Text>
      <Text style={styles.textBottom}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  textTop: {
    position: 'absolute',
    top: 10,
    left: '50%',
    transform: [{ translateX: -50 }],
    color: 'white',
  },
  textBottom: {
    position: 'absolute',
    bottom: 10,
    left: '50%',
    transform: [{ translateX: -50 }],
    color: 'white',
  },
});

export default ImageItem;
