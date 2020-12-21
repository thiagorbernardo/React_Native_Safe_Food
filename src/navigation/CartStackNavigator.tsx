import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoadingScreen from '../components/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function CartStackNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Loading">
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}