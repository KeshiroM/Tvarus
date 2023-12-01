import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ModulesScreen = ({ route }) => {
  const { username } = route.params;
  const navigation = useNavigation();
  const navigateToClimateAction = () => {
    navigation.navigate('ClimateAction');
  };
  const navigateToLifeonland = () => {
    navigation.navigate('Lifeonland');
  };
  const av = new Animated.Value(0);
  av.addListener(() => {return});
  const navigateToLifebelowwater = () => {
    navigation.navigate('Lifebelowwater');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modules</Text>
      <Text style={styles.welcomeText}>Welcome, {username}!</Text>
      <View style={styles.moduleContainer}>
        <TouchableOpacity style={styles.module} onPress={navigateToClimateAction}>
          <Image source={require('./assets/sdg13.png')} style={styles.moduleImage} />
          <Text style={styles.moduleTitle}>Climate Action</Text>
        </TouchableOpacity><Text></Text>
        <TouchableOpacity style={styles.module}onPress={navigateToLifeonland}>
          <Image source={require('./assets/sdg15.png')} style={styles.moduleImage} />
          <Text style={styles.moduleTitle}>Life on Land</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.module}  onPress={navigateToLifebelowwater} >
          <Image source={require('./assets/sdg14.png')}style={styles.moduleImage} />
          <Text style={styles.moduleTitle}>Life below Water</Text>
        </TouchableOpacity><Text>{'\n'}</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E3A43', 
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 18,
    color: 'white',
    marginVertical: 10,
  },
  moduleContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  module: {
    width: 200,
    height: 170,
    backgroundColor: 'white',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  moduleImage: {
    width: 100,
    height: 100,
  },
  moduleTitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ModulesScreen;
