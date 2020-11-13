import { combineReducers } from 'redux'
import User from './userReducer'
import Houses from './housesReducer'
export default combineReducers({
  User, Houses, 
})
