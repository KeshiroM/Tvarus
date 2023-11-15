import React, { useState,useEffect,useRef  } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import LottieView from 'lottie-react-native'; // Import the LottieView for JSON animations
const TreePlant = () => {
    const [waterLevel, setWaterLevel] = useState(0);
    const equilibriumLevel = 50;
    const [hasWatered, setHasWatered] = useState(false);
    const waterMeterAnim = useRef(null);
    const mosquitoAnim = useRef(null);
    const wateringAnim = useRef(null);
    const treeAnim = useRef(null);
  useEffect(() => {
    if (waterLevel < 100 && waterMeterAnim.current) {
      waterMeterAnim.current.play();
      wateringAnim.current.loop = false; // Play water meter animation
    }
  }, [waterLevel, waterMeterAnim]);
  const onAnimationFinish = () => {
    if (wateringAnim.current) {
      wateringAnim.current.reset();
      wateringAnim.current.loop = true; // Reset to loop for future uses
      setHasWatered(true);
    }
  };
    const waterPlants = () => {
      if (waterLevel < 100) {
        setWaterLevel(waterLevel + 10);
        
        if (wateringAnim.current) {
          wateringAnim.current.play();
           // Play watering animation
        }
        if (waterLevel >= equilibriumLevel - 10 && waterLevel <= equilibriumLevel + 10) {
          if (mosquitoAnim.current) {
            mosquitoAnim.current.play(); // Play mosquito animation
            alert('Congrats, you passed the level! You have been able to save the earth more than 48 pounds of carbon mixture for the next 1 year '); // Show pass message
          }
        }
      }
      if (waterMeterAnim.current) {
        waterMeterAnim.current.play()// Play water meter animation
      }
    };
  
    const stopWatering = () => {
      if (waterLevel < equilibriumLevel - 10 || waterLevel > equilibriumLevel + 10) {
        alert('Unfortunately you have failed the level and thereby more than 48 pounds of carbon mixture will remain in the envireonment, press ok to retry this level'); // Show failure message
        setWaterLevel(0); // Reset the water level
      }
    };
  
    return (
      <View style={styles.head}>
      <Text style={styles.headtext}> In this level, you have to water the plants so this mosquito can keep moving, She needs 50 pounds in the plants so she can keep moving</Text>
       <Text style={styles.headtext}>Everytime you push the button to water the plants it adds 10 pounds to the water level. You can choose to submit by pushing the stop Watering anytime</Text>
        <View style={styles.container}>
          <View style={styles.gameContainer}>
          <View style={styles.waterMeter}>
            <LottieView
              ref={waterMeterAnim}
              source={require('./assets/watermeter.json')}
              style={styles.waterMeterAnimation}
            />
          </View>
          
            <LottieView
            ref={wateringAnim}
            source={require('./assets/watering.json')}
            style={{width: 100, height: 500 }}
            autoPlay={false}
            loop={false}
            onAnimationFinish={onAnimationFinish}
          />   

          
            <View style={styles.gameArea}>
            <View style={styles.gameArea}>
            <LottieView
            ref={mosquitoAnim}
            source={require('./assets/mosquito.json')}
            style={styles.mosquitoAnimation}

          /></View>
              <LottieView
                ref={treeAnim}
                source={require('./assets/trees.json')}
                style={styles.treeAnimation}
              />
              {/* Other game elements like trees */}
            </View>
          </View>

          <TouchableOpacity style={styles.waterButton} onPress={waterPlants}>
            <Text>Water the Plants</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.stopButton} onPress={stopWatering}>
            <Text>Stop Watering</Text>
          </TouchableOpacity>
          <Text style={styles.headtext}> Help your neigborrhood improve oxygen,healthy trees improve oxygen</Text>

          

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
  head: {
    flex: 2
   
  },
  headtext:{
    fontSize:30,
    color: '#641E16'
  },
  gameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  gameArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  waterButton: {
    backgroundColor: '#6082B6',
    padding: 10,
    margin: 10,
  },
  stopButton: {
    backgroundColor: '#6082B6',
    padding: 10,
    margin: 10,
  },
  waterMeter: {
    width: 50,
    height: 200,
    backgroundColor: 'lightblue',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  treeAnimation: {
    width: 400,
    height: 400,
  },
  waterMeterAnimation: {
    width: 50,
    height: 70,
  },
  mosquitoAnimation: {
    width:60,
    height: 50,
  },
  wateringAnimation: {
    width: 150,
    height: 150,
  },
});

export default TreePlant;
