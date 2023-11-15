import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BackgroundScreen from './BackgroundScreen';
import UsernameInputScreen from './UsernameInputScreen';
import ModulesScreen from './ModulesScreen';
import ClimateActionScreen from './ClimateActionScreen';
import TreePlant from './TreePlant';
import EnergyMonitor from './EnergyMonitor';
import Lifeonland from './Lifeonland';
import Recyling from './Recycling';
import Carbon from './Carbon';
import Car from './Car'

const Stack = createStackNavigator();

const App = ({ navigation }) => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Background">
        <Stack.Screen name="Background" component={BackgroundScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UsernameInput" component={UsernameInputScreen} options={{ title: 'Username Input' }} />
        <Stack.Screen name="Modules" component={ModulesScreen} options={{ title: 'Modules' }} />
        <Stack.Screen name="ClimateAction" component={ClimateActionScreen} options={{ title: 'Climate Action' }} />
        <Stack.Screen name="TreePlant" component={TreePlant} options={{ title: 'Tree Plant' }} />
        <Stack.Screen name="EnergyMonitor" component={EnergyMonitor} options={{ title: 'Energy Monitor' }} />
        <Stack.Screen name="Carbon" component={Carbon} options={{ title: 'Carbon' }} />
        <Stack.Screen name="Recycling" component={Recyling} options={{ title: 'Recycling' }} />
        <Stack.Screen name="Lifeonland" component={Lifeonland} options={{ title: 'Lifeonland' }} />
        <Stack.Screen name="Car" component={Car} options={{ title: 'Car' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
