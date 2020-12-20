import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {Searchbar} from 'react-native-paper';
import moment from 'moment';
import CardFood from '../components/CardFood';
import {DailyMedicine, Food} from '../models/User.model';
import * as Animatable from 'react-native-animatable';
import {ResponseModel} from '../models/Response.model';
import {URL_BACKEND} from '../models/Develop.env';

export default function FoodScreen() {
  const [isLoading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  // useEffect(() => {
  //   console.log(searchQuery.toLowerCase());
  // }, [searchQuery]);

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
            <Searchbar
              placeholder="Procurar"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{marginBottom: 5, marginHorizontal: 10}}
            />
            {/* <Text style={styles.helloTitle}>Olá, {user.name}!</Text> */}
            <Text style={styles.textTitle}>Aqui estão as opções</Text>
          </Animatable.View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginBottom: 30,
            }}>
            {searchQuery == ''
              ? foods.map((food, key) => {
                  return <CardFood {...food}></CardFood>;
                })
              : foods
                  .filter((food) => food.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((food, key) => {
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
    price: 'R$ 20,00',
    category: 'Fast Food',
    img: 'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
  {
    id: '12j3123',
    key: 1,
    name: 'Hot Roll',
    price: 'R$ 12,99',
    category: 'Japanese',
    img:
      'https://imperialsushi.com.br/wp-content/uploads/2020/05/ROLL_HOTPHILADELPHIACROC.png',
  },
  {
    id: '12j3123',
    key: 2,
    name: 'Yakisoba',
    price: 'R$ 19,90',
    category: 'Japanese',
    img:
      'https://www.ikesushi.com.br/_imagens/culinaria-chinesa/yakisoba-tradicional.png',
  },
  {
    id: '12j3123',
    key: 3,
    name: 'Temaki',
    price: 'R$ 14,99',
    category: 'Japanese',
    img:
      'https://lh3.googleusercontent.com/proxy/bgw4h6XlOIbYOQ4UJOPD15qsEA5-apk6sRQAPdCQsjAaU80IKST1GcpPfXMSYOXE8wL6CN6FrytGnnmx3U3Hbs8o29p5BMS4st5GwztQMhbxuqJyR0TH34x3s70iVhg6fR42cDenTf29j4lNoL6XIvgz',
  },
  {
    id: '12j3123',
    key: 4,
    name: 'Sushi',
    price: 'R$ 13,99',
    category: 'Japanese',
    img: 'https://www.transparentpng.com/thumb/sushi/zcfCRy-sushi-vector.png',
  },
  {
    id: '12j3123',
    key: 5,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img: 'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
  {
    id: '12j3123',
    key: 6,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img: 'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
  {
    id: '12j3123',
    key: 7,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img: 'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
  {
    id: '12j3123',
    key: 8,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img: 'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
  {
    id: '12j3123',
    key: 9,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img: 'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
  {
    id: '12j3123',
    key: 10,
    name: 'Hamburguer',
    price: 'R$ 10,00',
    category: 'Fast Food',
    img: 'https://assets.stickpng.com/images/5882488ae81acb96424ffaaf.png',
  },
];

//TODO: Sort
// .sort((a, b) => {
//   if (a.name > b.name) return 1;
//   if (b.name > a.name) return -1;

//   return 0;
// })