import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from '../screens/Auth/OnboardingScreen';
import LoadingScreen from '../components/LoadingScreen';
import LoginScreen from '../screens/Auth/LoginScreen';

const Stack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
