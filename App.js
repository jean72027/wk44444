import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import HomeScreen from './src/screen/homeoscreen';
import DetailScreen from './src/screen/messagescreen';

const Stack = createStackNavigator();

function App() {
  return (
 <View >
   <DetailScreen/>
 </View>
  );
}

export default App;