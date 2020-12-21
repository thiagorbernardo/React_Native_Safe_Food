import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './navigation/TabNavigator';
import MainStackNavigator from './navigation/MainStackNavigator';

const App = () => {
  return (
      <NavigationContainer>
        {/* <TabNavigator /> */}
        <MainStackNavigator/>
      </NavigationContainer>
  );
};

export default App;
