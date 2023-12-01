import React,{useEffect,useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font'; // Import Font from Expo

const Lifeonland = () => {
  const navigation = useNavigation();

  const navigateToQuiz = () => {
    navigation.navigate('QuizPage');
  };
  const navigateToCoral = () => {
    navigation.navigate('Coral');
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
      <Text style={styles.title}>LIFE BELOW WATER</Text>

      <Text style={styles.description}>Conserve and sustainably use the oceans, seas and marine resources for sustainable development(source:UN)</Text>

      <TouchableOpacity style={styles.module} onPress={navigateToQuiz}>
        <Image source={require('./assets/waterquiz.png')} style={styles.gif} />
      </TouchableOpacity>
      <Text style={styles.moduleTitle}>OCEAN POLLUTION QUIZ </Text>
      <TouchableOpacity style={styles.module} onPress={navigateToCoral}>
        <Image source={require('./assets/reefs.png')} style={styles.gif} />
      </TouchableOpacity>
      <Text style={styles.moduleTitle}>DIFFERENT AQUATIC HABITATS</Text>
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
