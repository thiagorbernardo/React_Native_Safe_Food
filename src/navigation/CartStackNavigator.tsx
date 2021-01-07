import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Cart from '../screens/Cart/CartScreen';

const Stack = createStackNavigator();

export default function CartStackNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Cart">
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
