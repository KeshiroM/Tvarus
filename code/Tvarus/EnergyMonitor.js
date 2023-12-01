import React, { useEffect,useState,useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert,ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Font from 'expo-font';
const EnergyMonitor = () => {
  const [energyUsage, setEnergyUsage] = useState(0);
  const tvanim = useRef(null);
  const wmanim = useRef(null);
  const cmanim = useRef(null);
  const moanim = useRef(null);
  const lampanim = useRef(null);
  const acanim = useRef(null);
  const blanim = useRef(null);
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
  const handleAppliancePress = (energy, ref) => {
    ref.current.play();
    ref.current.loop = false;
    if (energyUsage + energy > 25) {
      Alert.alert('Failure', 'You have exceeded the energy limit. Please retry.');
      setEnergyUsage(0);
    } else {
      setEnergyUsage(energyUsage + energy);
    }
  };

  return (
    <ScrollView >
    <View style= {styles.background}>
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style= {styles.title} >Energy Usage: {energyUsage} kWh</Text>
      <Text style= {styles.text}>Welcome to this level, Your goal is to help your home turn on as much appliances as possible without reaching 25Kwh</Text>
      <Text style= {styles.text}>Tap on each Appliance and wait for it to come on.Watch  the energy usage, it updates evrytime you turn something on</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>
        <TouchableOpacity onPress={() => handleAppliancePress(5,tvanim) }>
          <LottieView ref={tvanim} source={require('./assets/tv.json')} style={styles.applianceAnimation} loop={false} />
          <Text style= {styles.text}> Television, 5kWh</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAppliancePress(7,wmanim)}>
          <LottieView ref={wmanim} source={require('./assets/wm.json')} style={styles.applianceAnimation} loop={false} />
          <Text style= {styles.text}> Washing Machine,7kWh</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAppliancePress(6,moanim)}>
          <LottieView ref={moanim}source={require('./assets/micoven.json')} style={styles.applianceAnimation} loop={false} />
          <Text style= {styles.text}> <Text>{' '}</Text>Microwave, 6kWh</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAppliancePress(7,blanim)}>
          <LottieView ref={blanim}source={require('./assets/blender.json')} style={styles.applianceAnimation} loop={false} />
          <Text style= {styles.text}> <Text>{'   '}</Text>Blender, 7kWh</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAppliancePress(3,lampanim)}>
          <LottieView ref={lampanim}source={require('./assets/lamp.json')} style={styles.applianceAnimation} loop={false} />
          <Text style= {styles.text}> <Text>{'   '}</Text> Lamp, 3kWh</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handleAppliancePress(6,acanim)}>
          <LottieView ref={acanim}source={require('./assets/ac.json')} style={styles.applianceAnimation} loop={false} />
          <Text style= {styles.text}> <Text>{'   '}</Text>Air Conditioner, 6kWh</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handleAppliancePress(7,cmanim)}>
          <LottieView ref={cmanim}source={require('./assets/coffeemaker.json')} style={styles.applianceAnimation} loop={false}/>
          <Text style= {styles.text}> <Text>{'   '}</Text>Coffee Maker, 6kWh</Text></TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 40 }}>
        <TouchableOpacity style={styles.stopButton} onPress={() => setEnergyUsage(0)}>
          <Text>Reset Meter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={() => (energyUsage > 25 ? Alert.alert('Failed', 'You have failed the level. Press OK to retry.') :
         Alert.alert('Passed', 'Congratulations! You passed the level. By being smart you have helped this household save power, the average North American household uses about 30Kwh a day.'))}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  applianceAnimation: {
    width: 100,
    height: 100,
  },
  stopButton: {
    backgroundColor: '#6082B6',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  background:{
    backgroundColor: '#767B7E',
    alignItems: 'center',
    paddingTop: 10,
    flex:1,
    paddingHorizontal: 2,
  },
  text:{
    fontFamily: 'Times New Roman',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title:{
    fontFamily: 'Charmonman',
    fontSize: 30,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#6082B6',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});

export default EnergyMonitor;
