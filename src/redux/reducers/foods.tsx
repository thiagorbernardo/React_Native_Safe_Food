import {ADD_FOOD, INCREASE_FOOD, REDUCE_FOOD} from '../actionTypes';

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
    // case INCREASE_FOOD: {
    //   const {id} = action.payload;
    //   return {
    //     ...state,
    //     byIds: {
    //       ...state.byIds,
    //       [id]: {
    //         ...state.byIds[id],
    //         completed: !state.byIds[id].completed,
    //       },
    //     },
    //   };
    // }
    // case REDUCE_FOOD: {
    //   const {id} = action.payload;
    //   return {
    //     ...state,
    //     byIds: {
    //       ...state.byIds,
    //       [id]: {
    //         ...state.byIds[id],
    //         completed: !state.byIds[id].completed,
    //       },
    //     },
    //   };
    // }
    default:
      return state;
  }
}
