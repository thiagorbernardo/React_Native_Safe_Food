/* This file will handle screen navigations */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TopBar from '../components/TopBar';

import {AppTheme} from '../theme/App.theme';
import FoodScreen from './Food/FoodScreen';

export default function HomeScreen() {
  return (
    <>
      <StatusBar backgroundColor="#E5ECFF" barStyle="dark-content" />
      <SafeAreaView style={styles.scrollView}>
        <>
          <TopBar />
          <LinearGradient
            colors={AppTheme.backgroundGradientHome}
            style={{flex: 1}}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <FoodScreen></FoodScreen>
            </ScrollView>
          </LinearGradient>
        </>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
