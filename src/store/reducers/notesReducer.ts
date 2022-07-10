import { NotesState } from "../../types/Notes"
import { NotesAction } from "../actions/notesActions"

const initialState = {
  notes: []
}

export const notesReducer = (state: NotesState = initialState, action: NotesAction) => {
  switch(action.type){
    case "ADD_NOTE": {
      return {...state, notes: [...state.notes, action.payload]}
    }
    default:
      return state
  }
}