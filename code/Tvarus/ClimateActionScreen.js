import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClimateActionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Climate Action</Text>
      <TouchableOpacity style={styles.module}>
          
          <Text style={styles.moduleTitle}>Recycle race </Text>
          
        </TouchableOpacity>
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
    color: 'white',
    marginVertical: 10,
  },
  
});

export default ClimateActionScreen;
