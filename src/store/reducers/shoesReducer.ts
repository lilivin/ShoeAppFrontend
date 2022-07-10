import ShoesListItem from "../../components/ShoesListItem/ShoesListItem"
import { ShoesState, SingleShoes } from "../../types/Shoes"
import { ShoesAddAction, ShoesArrayAddAction, ShoesRemoveAction, ShoesUpdateAction } from "../actions/shoesActions"

const initialState = {
  shoes: []
}

export const shoesReducer = (state: ShoesState = initialState, action: ShoesAddAction | ShoesRemoveAction | ShoesUpdateAction | ShoesArrayAddAction) => {
  switch(action.type){
    case "ADD_SHOES": {
      return {...state, shoes: [...state.shoes, action.payload]}
    }
    case "ADD_SHOES_ARRAY": {
      return {...state, shoes: [...state.shoes, ...action.payload]}
    }
    case "REMOVE_SHOES": {
      return  {
        ...state,
        shoes: state.shoes.filter((shoe: SingleShoes) => shoe.id !== action.payload)
      }
    }
    case "UPDATE_SHOES": {
      return {
        ...state,
        shoes: state.shoes.map((shoe) => {
          if(shoe.id === action.payload.id){
            console.log(shoe)
            return {
              ...shoe,
              product_code: action.payload.product_code,
              site: action.payload.site,
              size: action.payload.size
            };
          } else return shoe;
        })
      }
    }
    default:
      return state
  }
}