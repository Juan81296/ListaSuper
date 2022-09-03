import { v1 } from "uuid";


export const ItemReducer = (state,action) => {
  switch(action.type){
    case 'ADD_ITEM':
      return [...state,{
        title:action.item.title,
        id: v1()
      }]
    case 'REMOVE_ITEM' :
      return state.filter(item => item.id !== action.id)
      default:
        return state
  }

}