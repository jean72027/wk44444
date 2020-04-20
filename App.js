import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import HomeScreen from './src/screen/homeoscreen';
import DetailScreen from './src/screen/messagescreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name=" "
          component={HomeScreen}
          options={{
            headerStyle: {
              height: 0,
            },
          }} />

        <Stack.Screen name="DetailScreen" component={DetailScreen}
          options={{
            title: " ",
            headerStyle: {
              height: 0,
              backgroundColor: '#fafafa',
            },
            headerLeft: null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;