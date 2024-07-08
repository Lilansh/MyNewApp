import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const FeedScreen = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const newImages = [];
    for (let i = 0; i < 20; i++) {
      newImages.push(`https://picsum.photos/200?random=${i}`);
    }
    setImages(newImages);
  };

  return (
    <FlatList
      data={images}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={{ uri: item }} style={styles.image} />
          <Text style={styles.textTop}>Top Text</Text>
          <Text style={styles.textBottom}>Bottom Text</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
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

export default FeedScreen;
