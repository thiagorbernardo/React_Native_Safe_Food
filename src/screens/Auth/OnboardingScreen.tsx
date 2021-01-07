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
      onSkip={() => navigation.replace('Home')}
      onDone={() => navigation.replace('Home')}
      pages={[
        {
          backgroundColor: '#ff8880',
          image: (
            <LottieView
              source={require('../assets/lottie/swiping-app.json')}
              autoPlay
              resizeMode="contain"
              style={styles.lottie}
            />
          ),
          title: 'Bem vindo ao Safe Food',
          subtitle: 'Aplicativo de delivery de comida para a hora da fome',
        },
        {
          backgroundColor: '#8fffbd',
          image: (
            <LottieView
              source={require('../assets/lottie/falling-salad.json')}
              autoPlay
              resizeMode="contain"
              style={styles.lottie}
            />
          ),
          title: 'Simples e Fácil',
          subtitle: 'Com simplicidade e praticidade entregaremos sua comida predileta',
        },
        {
          backgroundColor: '#91bdff',
          image: (
            <LottieView
              source={require('../assets/lottie/food-delivery.json')}
              autoPlay
              resizeMode="contain"
              style={styles.lottie}
            />
          ),
          title: 'Iremos Chegar Até Você!',
          subtitle: 'Atualmente estamos entregando apenas em Miracatu, na Gaeli.',
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