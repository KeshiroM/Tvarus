import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native';

const Car = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [
    { id: 1, title: 'Car 1', description: 'This is a sporty and fast sedan that uses both Gas and it costs $70,000. Stacey would need to lend $20,000', image: require('./assets/c4.png') },
    { id: 2, title: 'Car 2', description: 'This is a fully electric car and it costs $ 55,000. Stacey would need to lend $5,000 to buy.', image: require('./assets/c2.jpg') },
    { id: 3, title: 'Car 3', description: 'This sedan is a fully gas car and it costs $20,000', image: require('./assets/c3.png') },
    { id: 4, title: 'Car 4', description: 'This 2 door car is fully electric and costs $40,000', image: require('./assets/c1.png') },
    { id: 5, title: 'Car 5', description: 'This Off-road SUV built for adventurous journeys uses competely gas and costs $45,000.', image: require('./assets/c5.jpg') },
  ];

  const handleCarPress = (carId) => {
    setSelectedCar(carId);
  };

  const handleSubmit = () => {
    if (selectedCar === 4) {
      Alert.alert('Congratulations!', 'You have selected the correct car. You passed! A  fully electric car can save carbon dioxide emissions by up to 70% compared to gas vehicles');
    } else {
      Alert.alert('Oops!', 'You have selected a bad choice.One gas car can emit up to 4.6 metric tons of carbon dioxide a year, Please retry.');
      setSelectedCar(null);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Help Stacey choose the right car, she has $50,000 to spend</Text>
      {cars.map((car) => (
        <TouchableOpacity
          key={car.id}
          style={[styles.carBox, selectedCar === car.id && styles.selectedCarBox]}
          onPress={() => handleCarPress(car.id)}
        >
          <Image source={car.image} style={styles.carImage} />
          <Text style={styles.carTitle}>{car.title}</Text>
          <Text style={styles.carDescription}>{car.description}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  carBox: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
  },
  selectedCarBox: {
    backgroundColor: 'lightblue',
  },
  carImage: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  carTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  carDescription: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Car;
