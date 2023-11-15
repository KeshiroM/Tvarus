import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker'

const Carbon = () => {
  const [carUsage, setCarUsage] = useState(0);
  const [homeEnergy, setHomeEnergy] = useState(0);
  const [waste, setWaste] = useState(0);
  const [food, setFood] = useState('Choose');
  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [carbonFootprintPounds, setCarbonFootprintPounds] = useState(0);
  const [carbonFootprintRange, setCarbonFootprintRange] = useState('Low');
  const calculateCarbonFootprint = () => {
    let foodCarbon = 0;
    if (food === 'Red Meat') {
      foodCarbon = 2000; // Carbon footprint value for red meat
    } else if (food === 'Poultry') {
      foodCarbon = 800; // Carbon footprint value for poultry
    } else if (food === 'Vegetables') {
      foodCarbon = 200; // Carbon footprint value for vegetables
    } else if (food === 'Vegan') {
      foodCarbon = 100; // Carbon footprint value for vegan diet
    }
    const total = carUsage + homeEnergy + waste + foodCarbon;
    setCarbonFootprint(total);
    const totalPounds = total * 2.2;
    setCarbonFootprintPounds(totalPounds);
    if (total < 5000) {
        setCarbonFootprintRange('Low');
      } else if (total >= 5000 && total < 15000) {
        setCarbonFootprintRange('Medium');
      } else {
        setCarbonFootprintRange('High');
      }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Calculate Your Carbon Footprint In Kilograms of carbon dioxide each year</Text>
    <Text style={styles.subtitle}></Text>
      <Text style={styles.subtitle}>Car Usage (kg CO2/year):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="e.g. How often do you go in a car? Consider how many times in a day, say 1 for every 10km travelled"
        onChangeText={(value) => setCarUsage(parseInt(value) || 0)}
      />

      <Text style={styles.subtitle}>Home Energy (kg CO2/year):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="e.g. How often do you leave the lights on? If you live it on for half days then write in 1000"
        onChangeText={(value) => setHomeEnergy(parseInt(value) || 0)}
      />

      <Text style={styles.subtitle}>Waste Management (kg CO2/year):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="e.g. How much waste do you create? Give an estimate for the whole year"
        onChangeText={(value) => setWaste(parseInt(value) || 0)}
      />

      <Text style={styles.subtitle}>Food Consumption (kg CO2/year):</Text>
      <Picker
        selectedValue={food}
        style={styles.picker}
        onValueChange={(itemValue) => setFood(itemValue)}
      >
        <Picker.Item label="Choose" value="Choose" />
        <Picker.Item label="Red Meat" value="Red Meat" />
        <Picker.Item label="Poultry" value="Poultry" />
        <Picker.Item label="Vegetables" value="Vegetables" />
        <Picker.Item label="Vegan" value="Vegan" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={calculateCarbonFootprint}>
        <Text style={styles.buttonText}>Calculate Footprint</Text>
      </TouchableOpacity>

      <Text style={styles.result}>Total Carbon Footprint: {carbonFootprint} kg CO2/year
      ({carbonFootprintPounds} pounds) - {carbonFootprintRange} range</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    height: 40,
  },
  picker: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Carbon;
