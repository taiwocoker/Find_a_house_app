import { combineReducers } from 'redux'
import User from './userReducer'
import Houses from './housesReducer'
import House from './houseReducer'
export default combineReducers({
  User, Houses, House, 
})
