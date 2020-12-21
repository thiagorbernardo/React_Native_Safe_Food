import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStackNavigator from './MainStackNavigator';
import Icon from 'react-native-vector-icons/Feather';
import CartStackNavigator from './CartStackNavigator';
import {AppTheme} from '../theme/App.theme';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Carrinho') {
            iconName = 'shopping-cart';
          }
          // You can return any component that you like here!

          return <Icon name={iconName!} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          position: 'absolute',
          bottom: 20,
          marginTop: 10,
          left: 40,
          right: 40,
          borderRadius: 100,
          borderTopColor: 'black',
          borderTopWidth: 0.2,
          borderColor: 'black',
          borderWidth: 0.2,
          elevation: 4,
          flexDirection: "column",
          alignContent: 'space-around'
        },
        activeTintColor: AppTheme.colorPrimary,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Carrinho" component={CartStackNavigator} />
    </Tab.Navigator>
  );
}
