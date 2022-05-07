import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
//
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Register from './components/Register';
import Main from './components/Main';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
      headerShown: false
      }}
      >
     
        <Stack.Screen name="Đăng nhập" component={Login} />
        <Stack.Screen name="Đăng ký" component={Register} />
          <Stack.Screen
          name="M"
          component={Main}
           options={{ headerLeft: () => false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

