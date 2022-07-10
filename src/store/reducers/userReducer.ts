import ShoesListItem from "../../components/ShoesListItem/ShoesListItem"
import { ShoesState, SingleShoes } from "../../types/Shoes"
import { User } from "../../types/User"
import { ShoesAddAction, ShoesArrayAddAction, ShoesRemoveAction, ShoesUpdateAction } from "../actions/shoesActions"
import { UserAddAction } from "../actions/userActions"

const userState = {
    id: '',
    createdAt: '',
    updatedAt: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    role: '',
}

export const userReducer = (state: User = userState, action: UserAddAction) => {
  switch(action.type){
    case "ADD_USER": {
      return action.payload
    }
    default:
      return state
  }
}