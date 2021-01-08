import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import TabNavigator from './navigation/TabNavigator';
import MainStackNavigator from './navigation/MainStackNavigator';

import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <TabNavigator /> */}
        <MainStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
