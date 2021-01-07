import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {List} from 'react-native-paper';
import {AppTheme} from '../../theme/App.theme';

export default function Cart() {
  const generateAddButtons = (
    <>
      <List.Icon color="#000" icon="minus" />
      <Text style={{alignSelf: 'center'}}>1</Text>
      <List.Icon color="#000" icon="plus" />
    </>
  );

  return (
    <>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.addressViewTop}>
          <Text style={styles.addressTextTop}>
            R. Cândido dos Santos Coelho, 91
          </Text>
        </View>
        <List.Section style={{marginTop: 30}}>
          <List.Subheader style={{fontSize: 16}}>Aqui está seu pedido:</List.Subheader>
          <View style={styles.foodListItem}>
            <List.Item
              title="Yakisoba wow"
              description="R$ 13,99"
              titleStyle={{fontSize: 19, top: -6}}
              descriptionStyle={{fontSize: 16, top: 4}}
              right={() => generateAddButtons}
            />
          </View>
          <View style={styles.foodListItem}>
            <List.Item
              title="Temaki wow"
              description="R$ 13,99"
              titleStyle={{fontSize: 19, top: -6}}
              descriptionStyle={{fontSize: 16, top: 4}}
              right={() => generateAddButtons}
            />
          </View>
        </List.Section>
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
