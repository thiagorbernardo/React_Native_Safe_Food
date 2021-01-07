import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import FoodDetails from '../screens/Food/FoodDetails';
import { AppTheme } from '../theme/App.theme';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="FoodDetails" component={FoodDetails} options={{ cardStyle: {backgroundColor: AppTheme.alarmCardColors}}}/>
    </Stack.Navigator>
  );
}
