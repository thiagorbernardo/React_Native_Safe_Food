import React from 'react';
import * as Progress from 'react-native-progress';
import {View} from 'react-native-animatable';
import {AppTheme} from '../theme/App.theme';

export default function LoadingScreen() {
  return (
    <>
      <View
        style={{
          backgroundColor: AppTheme.topBarColor,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Progress.Circle
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
          }}
          size={100}
          indeterminate={true}
        />
      </View>
    </>
  );
}
