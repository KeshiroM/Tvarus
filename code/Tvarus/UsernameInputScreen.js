import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const UsernameInputScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const navigateToModules = () => {
    navigation.navigate('Modules', { username });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={navigateToModules}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E3A43', // Set the same background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white', // Background color for the input field
    borderRadius: 5,
    padding: 5,
  },
  button: {
    backgroundColor: '#007BFF', // Background color for the button
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default UsernameInputScreen;
