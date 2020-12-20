import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import {IconButton} from 'react-native-paper';
import {Food} from '../models/User.model';
import {AppTheme} from '../theme/App.theme';
import {useNavigation, StackActions} from '@react-navigation/native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import AwesomeButton from 'react-native-really-awesome-button';

const {windowWidth, windowHeight} = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
};

export default function FoodDetails({navigation, route}: any) {
  const food: Food = route.params.food;
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({item, index}: any) => {
    return (
      <Image
        source={{
          uri: item,
        }}
        style={styles.image}
      />
    );
  };

  let ref = React.createRef<any>();

  return (
    <>
      <SafeAreaView style={styles.cardView}>
        <Carousel
          layout="stack"
          ref={ref}
          data={food.img}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <Pagination
          dotsLength={food.img.length}
          activeDotIndex={activeSlide}
          containerStyle={{}}
          dotStyle={{
            width: 8,
            height: 8,
            marginHorizontal: 8,
            backgroundColor: AppTheme.colorPrimary,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
        <View style={styles.foodView}>
          <Text style={styles.foodName}>{food.name}</Text>
          <Text style={styles.foodPrice}>{food.category}</Text>
          <Text style={styles.foodPrice}>{food.description}</Text>
        </View>
      </SafeAreaView>
      <AwesomeButton
        stretch={true}
        backgroundColor={'red'}
        backgroundActive={AppTheme.colorPrimary}
        textColor={'white'}
        borderRadius={10}
        disabled={false}
        style={{
          marginBottom: 14,
          marginHorizontal: 10,
          width: windowWidth - 20,
          position: 'absolute',
          bottom: 0,
        }}
        onPress={async () => {
          console.log(`Adding`);
        }}>
        Adicionar
      </AwesomeButton>
    </>
  );
}
const styles = StyleSheet.create({
  cardView: {
    backgroundColor: AppTheme.alarmCardColors,
    flexDirection: 'column',
  },
  image: {
    height: windowHeight * 0.4,
    resizeMode: 'cover',
  },
  foodView: {
    height: 'auto',
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  foodName: {
    ...AppTheme.titleStyles,
    fontSize: 30,
    alignSelf: 'center',
  },
  foodPrice: {
    ...AppTheme.titleStyles,
    alignSelf: 'center',
    fontSize: 20,
    marginHorizontal: 10,
    marginTop: 10,
    textAlign: 'justify',
    letterSpacing: 0,
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
