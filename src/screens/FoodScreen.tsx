import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import moment from 'moment';
import CardFood from '../components/CardFood';
import {DailyMedicine, Food} from '../models/User.model';
import * as Animatable from 'react-native-animatable';
import {ResponseModel} from '../models/Response.model';
import {URL_BACKEND} from '../models/Develop.env';

export default function FoodScreen() {
  const [isLoading, setLoading] = useState(false);
  const user = {
    name: 'Thiago',
  };

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
            <Text style={styles.textTitle}>Aqui estão as opções</Text>
          </Animatable.View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginBottom: 30,
            }}>
            {foods.map((food, key) => {
              return <CardFood {...food}></CardFood>;
            })}
          </View>
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
const foods = [
  {
    id: '12j3123',
    key: 0,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img:
      'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
  {
    id: '12j3123',
    key: 1,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img:
      'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
  {
    id: '12j3123',
    key: 2,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img:
      'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
  {
    id: '12j3123',
    key: 3,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img:
      'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
  {
    id: '12j3123',
    key: 4,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img:
      'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
  {
    id: '12j3123',
    key: 5,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img:
      'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
  {
    id: '12j3123',
    key: 6,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img:
      'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
  {
    id: '12j3123',
    key: 7,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img:
      'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
  {
    id: '12j3123',
    key: 8,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img:
      'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
  {
    id: '12j3123',
    key: 9,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img:
      'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
  {
    id: '12j3123',
    key: 10,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img:
      'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
];
