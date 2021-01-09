import {ADD_FOOD, REDUCE_FOOD} from '../actionTypes';

const initialState = {
  allFoodsOnCart: [],
  allFoodsOnCartByIds: {},
};

export default function (
  state = initialState,
  action: {type: any; payload: {id: string; content: any}},
) {
  switch (action.type) {
    case ADD_FOOD: {
      const {id, content} = action.payload;
      const foodsIds: string[] = state.allFoodsOnCart;

      let quantity: number = 0;
      if (foodsIds.length != 0) {
        if (foodsIds.includes(id)) {
          // @ts-ignore
          quantity = state.allFoodsOnCartByIds[id].quantity;
        }
      }

      return {
        ...state,
        allFoodsOnCart: foodsIds.includes(id)
          ? [...state.allFoodsOnCart]
          : [...state.allFoodsOnCart, id],
        allFoodsOnCartByIds: {
          ...state.allFoodsOnCartByIds,
          [id]: {
            content,
            quantity: quantity + 1,
          },
        },
      };
    }
    case REDUCE_FOOD: {
      const {id, content} = action.payload;
      const foodsIds: string[] = state.allFoodsOnCart;

      let quantity: number = 0;
      if (foodsIds.length != 0) {
        if (foodsIds.includes(id)) {
          // @ts-ignore
          quantity = state.allFoodsOnCartByIds[id].quantity;
          quantity -= 1;
        }
      }
      if (quantity == 0) {
        const index = foodsIds.indexOf(id);
        if (index > -1) {
          foodsIds.splice(index, 1);
          // @ts-ignore
          delete state.allFoodsOnCartByIds[id];
        }
      }
      return {
        ...state,
        allFoodsOnCart: [...foodsIds],
        allFoodsOnCartByIds:
          quantity != 0
            ? {
                ...state.allFoodsOnCartByIds,
                [id]: {
                  content,
                  quantity: quantity,
                },
              }
            : {
                ...state.allFoodsOnCartByIds,
              },
      };
    }
    default:
      return state;
  }
}
