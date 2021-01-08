import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {IconButton, List} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import BigRedButton from '../../components/BigRedButton';
import {windowWidth} from '../../constants/constants';
import {RootState} from '../../redux/store';
import {AppTheme} from '../../theme/App.theme';
import LottieView from 'lottie-react-native';
import {FoodCardItem} from '../../models/User.model';
import {addFood} from '../../redux/actions';

export default function Cart() {
  const [cardItens, setCardItens] = useState<FoodCardItem[]>([]);

  const {allFoodsOnCart, allFoodsOnCartByIds} = useSelector(
    (state: typeof RootState) => state.foods,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (allFoodsOnCart.length != 0) {
      setCardItens(Object.values(allFoodsOnCartByIds));
    }
  }, [allFoodsOnCart]);

  console.log(allFoodsOnCart);
  console.log(allFoodsOnCartByIds);

  return (
    <>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.addressViewTop}>
          <Text style={styles.addressTextTop}>
            R. Cândido dos Santos Coelho, 91
          </Text>
        </View>

        {allFoodsOnCart.length == 0 ? (
          <>
            <LottieView
              source={require('../../assets/lottie/empty-box.json')}
              autoPlay
              style={{flex: 1}}
              resizeMode="contain"
            />
            <Text style={styles.messageEmptyCart}>
              Que pena! Você ainda não adicionou nada no carrinho.
            </Text>
          </>
        ) : (
          <List.Section style={{marginTop: 30}}>
            <List.Subheader style={{fontSize: 16}}>
              Aqui está seu pedido:
            </List.Subheader>
            {cardItens.map((cardItem) => {
              return (
                <View style={styles.foodListItem} key={cardItem.content.id}>
                  <List.Item
                    title={cardItem.content.name}
                    description={cardItem.content.price}
                    titleStyle={{fontSize: 19, top: -6}}
                    descriptionStyle={{fontSize: 16, top: 4}}
                    right={() => (
                      <>
                        <IconButton
                          icon="minus"
                          color={AppTheme.colorPrimary}
                          size={30}
                          onPress={() => {
                            // dispatch(addFood(cardItem.content));
                            console.log('Removing');
                          }}
                        />
                        <Text style={{alignSelf: 'center', fontSize: 18}}>
                          {cardItem.quantity}
                        </Text>
                        <IconButton
                          icon="plus"
                          color={AppTheme.colorPrimary}
                          size={30}
                          onPress={() => {
                            dispatch(addFood(cardItem.content));
                            console.log('Adding');
                          }}
                        />
                      </>
                    )}
                  />
                </View>
              );
            })}
          </List.Section>
        )}

        <BigRedButton
          title={'Finalizar Pedido'}
          execute={async () => {
            console.log(`Finish Order`);
          }}
          disabled={allFoodsOnCart.length == 0 ? true : false}
          style={{
            marginHorizontal: 10,
            width: windowWidth - 20,
            position: 'absolute',
            bottom: 85,
          }}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: AppTheme.backgroundBaseColor,
    paddingTop: 10,
  },
  addressViewTop: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'center',
  },
  addressTextTop: {
    color: '#1A2D4E',
    fontFamily: 'SawtonCircular-Thin',
    letterSpacing: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  messageEmptyCart: {
    color: '#1A2D4E',
    fontFamily: 'SawtonCircular-Thin',
    alignSelf: 'center',
    marginHorizontal: 40,
    display: 'flex',
    top: 140,
    letterSpacing: 0.6,
    fontSize: 24,
  },
  foodListItem: {
    marginVertical: 5,
    marginHorizontal: 10,
    paddingLeft: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    height: 90,
    justifyContent: 'center',
  },
});
