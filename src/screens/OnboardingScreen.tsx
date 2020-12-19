import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

const Dots = ({selected}: any) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle="dark-content"
      />
      <View
        style={{
          width: 7,
          height: 7,
          marginHorizontal: 3,
          borderRadius: 5,
          backgroundColor,
        }}
      />
    </>
  );
};

const Skip = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Pular</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Próximo</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Finalizar</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}: any) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.replace('Login')}
      pages={[
        {
          backgroundColor: '#D5F3FF',
          image: (
            <LottieView
              source={require('../assets/lottie/human-exercise1.json')}
              autoPlay
              resizeMode="contain"
              style={styles.lottie}
            />
          ),
          title: 'Faça exercícios',
          subtitle: 'Assim Você Ajuda Seu Corpo a Manter o Transplante',
        },
        {
          backgroundColor: '#c975c5',
          image: (
            <LottieView
              source={require('../assets/lottie/doctor-patient.json')}
              autoPlay
              resizeMode="contain"
              style={styles.lottie}
            />
          ),
          title: 'Mantenha a Alimentação',
          subtitle: 'colocar texto',
        },
        {
          backgroundColor: '#ffbae0',
          image: (
            <LottieView
              source={require('../assets/lottie/phone-exercise.json')}
              autoPlay
              resizeMode="contain"
              style={styles.lottie}
            />
          ),
          title: 'Tome os Remédios',
          subtitle: 'Irei Te Lembrar Na Hora De Tomar Cada Remédio',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: 300,
    height: 300,
    justifyContent: 'flex-end',
    marginRight: 1,
    marginTop: 1,
  },
});