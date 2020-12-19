import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import moment from 'moment';
import Alarm from '../components/TemplateAlarm';
import {DailyMedicine, Medicine} from '../models/User.model';
import * as Animatable from 'react-native-animatable';
import {ResponseModel} from '../models/Response.model';
import { URL_BACKEND } from '../models/Develop.env'

export default function DrugScreen() {

  const [isLoading, setLoading] = useState(false);
  const user = {
    name: 'Thiago'
  }
  return (
    <>
      {isLoading ? (
        <LottieView
          source={require('../assets/lottie/loading-plane.json')}
          autoPlay
          resizeMode="contain"
          style={styles.lottieLoading}
        />
      ) : (
        <ScrollView>
          <Animatable.View
            animation="slideInDown"
            iterationCount={1}
            direction="alternate">
            <Text style={styles.helloTitle}>Olá, {user.name}!</Text>
            <Text style={styles.textTitle}>Aqui estão seus remédios</Text>
          </Animatable.View>
          {/* {medicine.map((med, key) => {
            return <Alarm {...med}></Alarm>;
          })} */}
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  helloTitle: {
    color: '#1A2D4E',
    fontFamily: 'Roboto-Bold',
    fontSize: 23,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  textTitle: {
    color: '#1A2D4E',
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  lottieLoading: {
    flex: 1,
  },
});
