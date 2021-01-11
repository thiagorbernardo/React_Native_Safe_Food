import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {PermissionsAndroid} from 'react-native';

export const checkPermissions = async () => {
  return await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'SafeFood Permissão de Localização',
      message:
        'SafeFood precisa da sua Localização ' +
        'para efetuarmos uma melhor entrega.',
      buttonPositive: 'OK',
      buttonNegative: 'Cancelar',
    },
  );
};
