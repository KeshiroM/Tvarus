import React,{useEffect,useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font'; // Import Font from Expo

const Lifeonland = () => {
  const navigation = useNavigation();

  const navigateToCarbon = () => {
    navigation.navigate('Carbon');
  };
  const navigateToCar = () => {
    navigation.navigate('Car');
  };

  const navigateToRecycling = () => {
    navigation.navigate('Recycling');
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LIFE ON LAND</Text>

      <Text style={styles.description}>PROTECT, RESTORE AND PROMOTE SUSTAINABLE USE OF TERRESTRIAL ECOSYSTEMS, SUSTAINABLY MANAGE FORESTS, COMBAT DESERTIFICATION, AND HALT AND REVERSE LAND DEGRADATION AND HALT BIODIVERSITY LOSS(SOURCE:UNITED NATIONS)</Text>

      <TouchableOpacity style={styles.module} onPress={navigateToRecycling}>
        <Image source={require('./assets/recyling.png')} style={styles.gif} />
      </TouchableOpacity>
      <Text style={styles.moduleTitle}>RECYCLE RACE</Text>
      <TouchableOpacity style={styles.module} onPress={navigateToCarbon}>
        <Image source={require('./assets/carbon.jpg')} style={styles.gif} />
      </TouchableOpacity>
      
      <Text style={styles.moduleTitle}>CARBON FOOTPRINT CALCULATOR</Text>
      <TouchableOpacity style={styles.module} onPress={navigateToCar}>
        <Image source={require('./assets/car.jpg')} style={styles.gif} />
      </TouchableOpacity>
      <Text style={styles.moduleTitle}>CHOOSE A CAR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E3A43',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
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
    color: 'white',
    textAlign: 'center',
    fontFamily:'Charmonman',
    marginVertical: 15,
    fontWeight: 'bold',
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
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  gif: {
    width: 210,
    height: 205,
    
  },
});

export default Lifeonland;
