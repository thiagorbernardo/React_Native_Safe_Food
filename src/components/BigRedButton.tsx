import React from 'react';
import AwesomeButton from 'react-native-really-awesome-button';
import { windowWidth } from '../constants/constants';
import {AppTheme} from '../theme/App.theme';

const BigRedButton = (props: any) => {
  const {title, execute, style} = props;

  return (
    <AwesomeButton
      stretch={true}
      backgroundColor={'red'}
      backgroundActive={AppTheme.colorPrimary}
      textColor={'white'}
      borderRadius={10}
      disabled={false}
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
