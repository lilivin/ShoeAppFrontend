import eventBus from "../../EventBut"
import { ModalState } from "../../types/Modal"
import { ModalAddAction, ModalEditAction, ModalHiddenAction } from "../actions/modalActions"

const initialState = {
  modal: 'HIDDEN'
}

export const modalReducer = (state: ModalState = initialState, action: ModalHiddenAction | ModalEditAction | ModalAddAction) => {
  switch(action.type){
    case "SET_HIDDEN_MODE": {
      return {...state, modal: 'HIDDEN'}
    }
    case "SET_EDIT_MODE": {
      return {...state, modal: 'MODIFY'}
    }
    case "SET_ADD_MODE": {
      return {...state, modal: 'ADD'}
    }
    default:
      return state
  }
}