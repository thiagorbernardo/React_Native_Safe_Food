// redux/actions.js
import { ADD_FOOD, REDUCE_FOOD } from './actionTypes'

export const addFood = (content: any) => ({
  type: ADD_FOOD,
  payload: {
    id: content.id,
    content
  }
})

export const reduceFood = (content: any) => ({
  type: REDUCE_FOOD,
  payload: {
    id: content.id,
    content
  }
})