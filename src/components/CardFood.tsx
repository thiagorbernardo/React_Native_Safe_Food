import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IconButton} from 'react-native-paper';
import {Food} from '../models/User.model';
import {AppTheme} from '../theme/App.theme';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import moment from 'moment';
import {LocalNotification} from '../services/LocalPushController';
import {URL_BACKEND} from '../models/Develop.env';
import {ResponseModel} from '../models/Response.model';

export default function CardFood(food: Food) {
  return (
    <>
      <Animatable.View
        animation="slideInDown"
        iterationCount={1}
        direction="alternate"
        style={styles.cardView}>
        <View>
          <Image
            source={{
              uri: food.img,
            }}
            style={styles.image}
          />
          <Text style={styles.foodName}>{food.name}</Text>
          <Text style={styles.foodPrice}>{food.price}</Text>
        </View>
      </Animatable.View>
    </>
  );
}
const styles = StyleSheet.create({
  cardView: {
    backgroundColor: AppTheme.alarmCardColors,
    borderRadius: 35,
    padding: 10,
    marginLeft: 18,
    marginRight: 6,
    marginTop: 18,
    height: 160,
    width: 165,
    elevation: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: 'contain'
  },
  foodName: {
    alignSelf: 'center',
    color: AppTheme.colorPrimary,
    fontFamily: 'SawtonCircular-Thin',
    fontSize: 17,
    letterSpacing: 1
  },
  foodPrice: {
    alignSelf: 'center',
    color: AppTheme.colorPrimary,
    fontFamily: 'SawtonCircular-Thin',
    fontSize: 13,
    marginBottom: 2,
    letterSpacing: 1
  },
});
// const setDailyPillTaken = async (id: string) => {
//   const today = moment().format('DD-MM-YYYY');
//   const email = 'thiago@t.com'; //This info will be on async storage or redux
//   console.log(today);
//   await fetch(`${URL_BACKEND}/api/user/setDailyPillTaken`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       date: today,
//       email: email,
//       id: id.toString(),
//     }),
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.error(error));
// };
