import {createStore} from 'redux';
import rootReducer from './reducers';

export const RootState = {
  foods: {
    allFoodsOnCart: [],
    allFoodsOnCartByIds: {},
  },
};

export default createStore(rootReducer);
