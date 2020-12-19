import moment from 'moment';
import {
  setStorageData,
  getStorageData,
  // deleteStorageData,
} from './AsyncStorageController';
import {URL_BACKEND} from '../models/Develop.env';
import {ResponseModel} from '../models/Response.model';
import {DailyMedicine} from '../models/User.model';

class UserService {
  async getDailyMedicines() {
    let dailyMeds = await getStorageData('dailyMedicines', true);
    const user = await getStorageData('user', true);
    if (dailyMeds) {
      let today = moment().format('DD-MM-YYYY');
      console.log('Getting user medicines', today);
      await fetch(
        `${URL_BACKEND}/api/user/getMedication?email=thiago@t.com&date=${today}`,
      )
        .then((response) => response.json())
        .then((json: ResponseModel<DailyMedicine>) => {
          console.log(json);
          dailyMeds = json.content;
        })
        .catch((error) => console.error(error));
    }
  }

  async getUser() {
    let user = await getStorageData('user', true);
  }
}
export default new UserService();
