import React from 'react';
import {Alert} from 'react-native';

export const CustomAlert = (title: string, description: string) => {
  return Alert.alert(
    title,
    description,
    [
      {
        text: 'OK',
        onPress: () => console.log('Ok Pressed'),
        style: 'cancel',
      },
    ],
    {cancelable: true},
  );
};
