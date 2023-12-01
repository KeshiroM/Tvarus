import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import * as Font from 'expo-font';



const BackgroundScreen = ({ navigation }) => {
  
  const handlePlayButtonPress = () => {
    navigation.navigate('UsernameInput');
  };

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadCustomFont() {
      await Font.loadAsync({
        'Charmonman': require('./assets/font/Charmonman-Bold.ttf'),
        
      });
      setFontLoaded(true);
    }
    const av = new Animated.Value(0);
    av.addListener(() => {return});

    loadCustomFont();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.background}>
        {fontLoaded ? ( 
          <Text style={styles.welcomeText}>Welcome to Tvarus! Learn about sustainability</Text>
          
        ) : null}
        <Image
          source={require('./assets/logo.png')}style={styles.logo}
        />
        <TouchableOpacity style={styles.playButton} onPress={handlePlayButtonPress}>
          <Text style={styles.playButtonText}>PLAY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: '#2E3A43',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Charmonman',
    fontWeight: 'bold',
    marginVertical: 18,
  },
  logo: {
    width: 500,
    height: 500,
    borderRadius: 15,
  },
  playButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  playButtonText: {
    color: 'white',
  },
});

export default BackgroundScreen;
