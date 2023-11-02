import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ModulesScreen = ({ route }) => {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modules</Text>
      <Text style={styles.welcomeText}>Welcome, {username}!</Text>
      <View style={styles.moduleContainer}>
        <TouchableOpacity style={styles.module}>
          <Image source={require('./assets/sdg13.png')} style={styles.moduleImage} />
          <Text style={styles.moduleTitle}>Climate Action</Text>
         
        </TouchableOpacity>
        
        {}
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
    width: 150,
    height: 150,
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
