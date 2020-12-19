import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { AppTheme } from '../theme/App.theme';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <IconButton icon="menu"></IconButton>
      {/* <Text style={styles.title}>{props.title}</Text> */}
      {/* <Image style={styles.avatar} source={require('../assets/img/avatar.png')}/> */}
      <Text style={styles.title}>Gaeli</Text>
      <LottieView
        source={require('../assets/lottie/healthy-food.json')}
        autoPlay
        resizeMode="cover"
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 52,
    flexDirection: 'row',
    backgroundColor: AppTheme.topBarColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  avatar: {
    width: 65,
    height: 65,
    justifyContent: 'flex-end',
  },
  title: {
    color: '#1A2D4E',
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
    marginBottom: 2,
    marginLeft: 3
  },
});

export default TopBar;
