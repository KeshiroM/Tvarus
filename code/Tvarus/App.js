import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BackgroundScreen from './BackgroundScreen';
import UsernameInputScreen from './UsernameInputScreen';
import ModulesScreen from './ModulesScreen';


const Stack = createStackNavigator();

const App = ({ navigation }) => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Background">
        <Stack.Screen name="Background" component={BackgroundScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UsernameInput" component={UsernameInputScreen} options={{ title: 'Username Input' }} />
        <Stack.Screen name="Modules" component={ModulesScreen} options={{ title: 'Modules' }} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
