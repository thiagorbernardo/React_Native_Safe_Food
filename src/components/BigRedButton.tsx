import React from 'react';
import AwesomeButton from 'react-native-really-awesome-button';
import { windowWidth } from '../constants/constants';
import {AppTheme} from '../theme/App.theme';

const BigRedButton = (props: any) => {
  const {title, execute, style, disabled} = props;

  return (
    <AwesomeButton
      stretch={true}
      backgroundColor={disabled ? 'rgba(26, 45, 78, 0.4)' : 'red'}
      backgroundActive={AppTheme.colorPrimary}
      textColor={'white'}
      borderRadius={10}
      disabled={disabled || false}
      style={
        style
          ? style
          : {
              marginBottom: 14,
              marginHorizontal: 10,
              width: windowWidth - 20,
              position: 'absolute',
              bottom: 0,
            }
      }
      onPress={async () => {
        execute();
      }}>
      {title}
    </AwesomeButton>
  );
};

export default BigRedButton;
