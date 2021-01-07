import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AppTheme} from '../../theme/App.theme';

export default function Cart() {
  return (
    <>
      <SafeAreaView style={styles.safeView}>
        <View>
            
        </View>
        <Text>asdasdasd</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: AppTheme.backgroundBaseColor,
    // padding: 20,
  },
});
