import 'react-native-reanimated'
import React from 'react';
import { StatusBar } from 'react-native';
import * as Notifications from 'expo-notifications'; 


import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor='#38A69D' barStyle='light-content'
      />
      <Routes/>
    </NavigationContainer>
  );
}
