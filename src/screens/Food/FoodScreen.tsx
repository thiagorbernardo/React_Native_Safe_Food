import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {Searchbar} from 'react-native-paper';
import moment from 'moment';
import FoodCard from './FoodCard';
import {Food, Category} from '../../models/User.model';
import * as Animatable from 'react-native-animatable';
import {ResponseModel} from '../../models/Response.model';
import {URL_BACKEND} from '../../models/Develop.env';
import {foods} from '../../models/Food.mock';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppTheme} from '../../theme/App.theme';

export default function FoodScreen() {
  const [isLoading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [categoriesClicked, setCategoriesClicked] = useState<string[]>([]);

  const onChangeSearch = (query: string) => setSearchQuery(query);

  useEffect(() => {
    let length: number = categoriesClicked.length;
    if (length !== 0) {
      if (categoriesClicked[length - 1] == categoriesClicked[length - 2]) {
        setSelectedCategory(null);
        setCategoriesClicked([]);
      }
    }
  }, [categoriesClicked]);

  const user = {
    name: 'Thiago',
  };

  const categories: Category[] = [
    {
      id: '432f5835-cd1a-4ee4-bb89-178ac665266d',
      name: 'Japonesa',
      alias: 'Japanese',
    },
    {
      id: '63e8e4cf-61a8-4fc7-b243-f1def59270e4',
      name: 'Lanches',
      alias: 'Fast Food',
    },
  ];
  const foodMap = (foods: Food[]) => {
    return foods.map((food) => <FoodCard key={food.id} {...food}></FoodCard>);
  };

  const renderFoods = () => {
    return selectedCategory == null
      ? searchQuery == ''
        ? foodMap(foods)
        : foodMap(
            foods.filter((food) =>
              food.name.toLowerCase().includes(searchQuery.toLowerCase()),
            ),
          )
      : foodMap(
          foods.filter((food) => food.category === selectedCategory.alias),
        );
  };

  const renderCategories = ({item}: any) => {
    const backgroundColor =
      item.id === selectedCategory?.id
        ? 'rgba(44, 156, 126, 0.7)'
        : 'rgba(26, 45, 78, 0.7)';
    return (
      <TouchableOpacity
        onPress={() => {
          setCategoriesClicked([...categoriesClicked, item.id]);
          setSelectedCategory(item);
        }}
        style={{
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 14,
          backgroundColor: backgroundColor,
          borderRadius: 75,
          elevation: 8,
        }}>
        <Text
          style={{fontSize: 18, fontFamily: 'Roboto-Medium', color: 'white'}}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {isLoading ? (
        <LottieView
          source={require('../../assets/lottie/loading-plane.json')}
          autoPlay
          resizeMode="contain"
          style={styles.lottieLoading}
        />
      ) : (
        <ScrollView style={{marginBottom: 50}}>
          <Animatable.View
            animation="slideInDown"
            iterationCount={1}
            direction="alternate">
            <Searchbar
              placeholder="Procurar"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{marginVertical: 5, marginHorizontal: 10, borderRadius: 100}}
            />
            {/* <Text style={styles.helloTitle}>Olá, {user.name}!</Text> */}
            <FlatList
              horizontal
              data={categories}
              renderItem={renderCategories}
              keyExtractor={(item) => item.id}
              extraData={selectedCategory}
            />
            <Text style={styles.textTitle}>Aqui estão as opções</Text>
          </Animatable.View>
          <View
            style={{
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              flexWrap: 'wrap',
              flexGrow: 0,
              marginBottom: 30,
            }}>
            {renderFoods()}
            {foods.length % 2 != 0 ? <View style={{width: 190}}></View> : null}
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
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  textTitle: {
    color: '#1A2D4E',
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
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
