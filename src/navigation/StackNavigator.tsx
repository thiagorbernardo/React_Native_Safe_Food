import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoadingScreen from '../components/LoadingScreen';
import FoodDetails from '../components/FoodDetails';
import LoginScreen from '../screens/LoginScreen';
import { AppTheme } from '../theme/App.theme';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="FoodDetails" component={FoodDetails} options={{ cardStyle: {backgroundColor: AppTheme.alarmCardColors}}}/>
      {/* <Stack.Screen name="Loading" component={LoadingScreen} /> */}
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
    </Stack.Navigator>
  );
}
