/* This file will handle screen navigations */
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TopBar from '../components/TopBar';

import {AppTheme} from '../theme/App.theme';
import DrugsScreen from './MainScreen';

export default function HomeScreen() {
  return (
    <>
      <StatusBar backgroundColor="#E5ECFF" barStyle="dark-content" />
      <SafeAreaView style={styles.scrollView}>
        <>
          <TopBar></TopBar>
          <LinearGradient
            colors={AppTheme.backgroundGradientHome}
            style={{flex: 1}}>
            <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView>
            <DrugsScreen></DrugsScreen>
          </LinearGradient>
        </>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});
