import React, {useEffect, useState} from 'react';
import {Linking, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {IconButton, List} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import BigRedButton from '../../components/BigRedButton';
import {windowWidth} from '../../constants/constants';
import {RootState} from '../../redux/store';
import {AppTheme} from '../../theme/App.theme';
import LottieView from 'lottie-react-native';
import {FoodCardItem} from '../../models/User.model';
import {addFood, reduceFood} from '../../redux/actions';
import {removeMaskFromPrice} from '../../common';
import {Switch} from 'react-native-gesture-handler';
import {CustomAlert} from '../../components/CustomAlert';
//https://api.whatsapp.com/send?phone=5547984596314&text=test%20test%20test%20test%20test%20test%20

export default function Cart() {
  const [cartItens, setCartItens] = useState<FoodCardItem[]>([]);
  const [userAddress, setUserAddress] = useState<string>(
    'R. Cândido dos Santos Coelho, 91',
  );
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const {allFoodsOnCart, allFoodsOnCartByIds} = useSelector(
    (state: typeof RootState) => state.foods,
  );
  const dispatch = useDispatch();

  function compareFoodsToSort(a: FoodCardItem, b: FoodCardItem) {
    if (a.content.name.toUpperCase() > b.content.name.toUpperCase()) {
      return 1;
    } else {
      return -1;
    }
  }

  useEffect(() => {
    if (allFoodsOnCart.length != 0) {
      const cart: any = Object.values(allFoodsOnCartByIds);
      setCartItens(cart.sort(compareFoodsToSort));
    }
  }, [allFoodsOnCart]);

  const countTotalOrder = () => {
    const reducer = (accumulator: number, currentValue: number) =>
      accumulator + currentValue;
    const totalOrder = cartItens.map(
      (item: FoodCardItem) =>
        item.quantity * removeMaskFromPrice(item.content.price),
    );
    if (totalOrder.length == 0) return `R$ ${0}`;

    let roundTotal =
      Math.round((totalOrder.reduce(reducer) + Number.EPSILON) * 100) / 100;
    if (isSwitchOn) roundTotal += 2;
    return `R$ ${roundTotal}`;
  };

  const sendOrderWPP = () => {
    let whatsAppMsg: string =
      'Olá, eu vou querer:\n\n' +
      cartItens
        .map((item: FoodCardItem) => `${item.quantity}x ${item.content.name}`)
        .join('\n');
    if (isSwitchOn)
      whatsAppMsg += `\n\n*Estou no endereço: ${userAddress}*\n\n😋`;
    else whatsAppMsg += `\n\n*Irei buscar o pedido*\n😋`;

    const phone = '+5541987972390';

    Linking.openURL(`whatsapp://send?text=${whatsAppMsg}&phone=${phone}`)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        CustomAlert(
          'Whatsapp não instalado',
          'Você precisa ter o aplicativo Whatsapp instalado!',
        );
      });
  };

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  // console.log(allFoodsOnCart);
  // console.log(allFoodsOnCartByIds);

  return (
    <>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.addressViewTop}>
          <Text style={styles.addressTextTop}>{userAddress}</Text>
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
          <View
            style={{
              justifyContent: 'space-between',
              marginBottom: 150,
              flex: 1,
            }}>
            <List.Section style={{marginTop: 30}}>
              <List.Subheader style={{fontSize: 16}}>
                Aqui está seu pedido:
              </List.Subheader>
              {cartItens.map((cardItem) => {
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
                              dispatch(reduceFood(cardItem.content));
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
            <View style={{alignSelf: 'flex-end'}}>
              <View style={styles.totalPrice}>
                <Text style={{alignSelf: 'center', fontSize: 16, margin: 20}}>
                  Precisa de entrega? (R$ 2,00)
                </Text>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
              </View>
              <View style={styles.totalPrice}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    alignSelf: 'center',
                  }}>
                  Total:
                </Text>
                <Text style={{alignSelf: 'center', fontSize: 18, margin: 20}}>
                  {countTotalOrder()}
                </Text>
              </View>
            </View>
          </View>
        )}

        <BigRedButton
          title={'Finalizar Pedido'}
          execute={async () => {
            await sendOrderWPP();
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
  totalPrice: {
    marginVertical: 5,
    marginHorizontal: 10,
    paddingLeft: 10,
    width: windowWidth - 20,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
