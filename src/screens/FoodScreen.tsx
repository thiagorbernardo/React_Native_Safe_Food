import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {Searchbar} from 'react-native-paper';
import moment from 'moment';
import FoodCard from '../components/FoodCard';
import {DailyMedicine, Food} from '../models/User.model';
import * as Animatable from 'react-native-animatable';
import {ResponseModel} from '../models/Response.model';
import {URL_BACKEND} from '../models/Develop.env';
import { foods } from '../models/Food.mock';

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
                  return <FoodCard {...food}></FoodCard>;
                })
              : foods
                  .filter((food) =>
                    food.name.toLowerCase().includes(searchQuery.toLowerCase()),
                  )
                  .map((food, key) => {
                    return <FoodCard {...food}></FoodCard>;
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

//TODO: Sort
// .sort((a, b) => {
//   if (a.name > b.name) return 1;
//   if (b.name > a.name) return -1;

//   return 0;
// })
