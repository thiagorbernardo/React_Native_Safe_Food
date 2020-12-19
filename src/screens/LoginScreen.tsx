import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import {AppTheme} from '../theme/App.theme';
import auth from '@react-native-firebase/auth';

export default function LoginScreen({navigation}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onPressSend = async () => {
    console.log(email, password);

    try {
      const user = await auth().signInWithEmailAndPassword(email, password);
      console.log('final do await', user);
      setIsAuthenticated(true);
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        return;
      } else if (error.code === 'auth/wrong-password') {
        console.log('That password is invalid!');
        return;
      }
      console.error(error);
    }
    console.log('chegou no final');
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log('Entrei no effect com valor:', isAuthenticated);
      // navigation.replace('Home');
    }
  }, [isAuthenticated]);
  return (
    <LinearGradient
      colors={AppTheme.backgroundGradientHome}
      style={styles.container}>
      <Text style={styles.logo}>Safe Food</Text>
      <LottieView
        source={require('../assets/lottie/heart-pumping.json')}
        autoPlay
        resizeMode="center"
        style={styles.lottie}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Senha..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Esqueceu a Senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={onPressSend}>
        <Text style={styles.loginText}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>Cadastre-se</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#465C69',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgot: {
    color: 'black',
    fontSize: 13,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#498467',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  lottie: {
    width: 270,
    height: 270,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
});
