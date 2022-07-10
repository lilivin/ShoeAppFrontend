import { combineReducers, createStore } from 'redux'
import {notesReducer} from './reducers/notesReducer'
import {shoesReducer} from './reducers/shoesReducer'
import {modalReducer} from './reducers/modalReducer'
import {userReducer} from './reducers/userReducer';

export const store = createStore(combineReducers({
    notesReducer,
    shoesReducer,
    modalReducer,
    userReducer
}))