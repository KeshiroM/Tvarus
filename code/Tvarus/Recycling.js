import React, { useState } from 'react';
import { View,Alert, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';

const imageSources = {
  r1: require('./assets/r1.png'),
  r2: require('./assets/r2.png'),
  r3: require('./assets/r3.png'),
  r4: require('./assets/r4.png'),
  r5: require('./assets/r5.png'),
  r6: require('./assets/r6.png'),
  r7: require('./assets/r7.png'),
  n4: require('./assets/n4.png'),
  n1: require('./assets/n1.png'),
  n2: require('./assets/n2.png'),
  n3: require('./assets/n3.png'),
  n5: require('./assets/n5.png'),
  n6: require('./assets/n6.png'),
  n7: require('./assets/n7.png'),
  n8: require('./assets/n8.png'),
};

const Recycling = () => {
  const [selectedImages, setSelectedImages] = useState(new Set());

  const handleImagePress = (image) => {
    if (image.startsWith('r')) {
      // Only track images starting with 'r'
      const newSelection = new Set(selectedImages);
      newSelection.add(image);
      setSelectedImages(newSelection);
    } else {
      // User selected an image starting with 'n'
      setSelectedImages(new Set()); // Reset selected images
    }
  };

  const handleSubmit = () => {
    if (selectedImages.size === 7) {
      // If the user has selected all 'r' images
      Alert.alert('Congrats!','Passed! Recycling prevents the emissions of many greenhouse gases and water pollutants, and saves energy. Using recovered material generates less solid waste. Recycling helps to reduce the pollution caused by the extraction and processing of virgin materials.'); // Passed the level
    } else {
      Alert.alert('Ooops!','Failed! Please retry. Remember you must select all items that can be recycled and you must not select any item that can not be recycled'); // Failed the level
      setSelectedImages(new Set()); // Reset selected images
    }
  };

  const imageRows = [];
  let row = [];
  let count = 0;
  const keys = Object.keys(imageSources);

  for (let i = 0; i < keys.length; i++) {
    row.push(
      <TouchableOpacity key={keys[i]} onPress={() => handleImagePress(keys[i])}>
        <View style={styles.imageBox}>
          <Image source={imageSources[keys[i]]} style={styles.image} />
        </View>
      </TouchableOpacity>
    );

    count++;
    if (count === 4 || i === keys.length - 1) {
      imageRows.push(
        <View style={styles.imageRow} key={keys[i]}>
          {row}
        </View>
      );
      count = 0;
      row = [];
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recycling Game</Text>
      <Text style={styles.body}>For this excecise you are suppossed to select all the items that can be recyled and then press submit, if you do not select all the recylable items or if you select an item that can not be recyled you will fail this level</Text>
      {imageRows}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  body: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  imageBox: {
    width: Dimensions.get('window').width / 4 - 30, // Four images per row
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default Recycling;
