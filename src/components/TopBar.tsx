import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { AppTheme } from '../theme/App.theme';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <IconButton icon="menu"></IconButton>
      {/* <Text style={styles.title}>{props.title}</Text> */}
      {/* <Image style={styles.avatar} source={require('../assets/img/avatar.png')}/> */}
      <LottieView
        source={require('../assets/lottie/avocado-healthy.json')}
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
    marginRight: 1,
    marginTop: 1,
  },
  title: {
    color: '#1A2D4E',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
});

export default TopBar;
