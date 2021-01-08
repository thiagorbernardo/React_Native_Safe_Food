// redux/actions.js
import { ADD_FOOD } from './actionTypes'

export const addFood = (content: any) => ({
  type: ADD_FOOD,
  payload: {
    id: content.id,
    content
  }
})
