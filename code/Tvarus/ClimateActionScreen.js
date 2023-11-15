import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font'; // Import Font from Expo

const ClimateActionScreen = () => {
  const navigation = useNavigation();

  const navigateToEnergyMonitor = () => {
    navigation.navigate('EnergyMonitor');
  };
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadCustomFont() {
      await Font.loadAsync({
        'Charmonman': require('./assets/font/Charmonman-Bold.ttf'),
        
      });
      setFontLoaded(true);
    }

    loadCustomFont();
  }, []);
  const navigateToTreePlant = () => {
    navigation.navigate('TreePlant');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Climate Action</Text>

      <Text style={styles.description}>
      CLIMATE CHANGE IS THE DEFINING ISSUE OF OUR TIME AND WE ARE AT A DEFINING MOMENT. FROM SHIFTING WEATHER PATTERNS THAT THREATEN FOOD PRODUCTION, TO RISING SEA LEVELS THAT INCREASE THE RISK OF CATASTROPHIC FLOODING, THE IMPACTS OF CLIMATE CHANGE ARE GLOBAL IN SCOPE AND UNPRECEDENTED IN SCALE. WITHOUT DRASTIC ACTION TODAY, ADAPTING TO THESE IMPACTS IN THE FUTURE WILL BE MORE DIFFICULT AND COSTLY.
      (SOURCE:UNITED NATIONS)</Text>

      <TouchableOpacity style={styles.module} onPress={navigateToEnergyMonitor}>
        <Image source={require('./assets/energydetective.png')} style={styles.gif} />
        
      </TouchableOpacity>
      <Text style={styles.moduleTitle}>Energy Monitor</Text>
      <TouchableOpacity style={styles.module} onPress={navigateToTreePlant}>
        <Image source={require('./assets/treeplanter.jpg')} style={styles.gif} />
   
      </TouchableOpacity>
      <Text style={styles.moduleTitle}>Maintain your garden</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E3A43',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 2,
  },
  title: {
    fontFamily: 'Charmonman',
    fontWeight: 'bold',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
  description: {
    fontFamily: 'Charmonman',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize:17,
    marginVertical: 20,
  },
  module: {
    width: 220,
    height: 220,
    backgroundColor: 'white',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  moduleTitle: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Charmonman',
    fontWeight: 'bold',
    color:'white',
  },
  gif: {
    width: 210,
    height: 205,
    
  },
});

export default ClimateActionScreen;
