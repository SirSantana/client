import {combineReducers} from 'redux'
import products from './reducer/productsReducer'
import users from './reducer/userReducer'


const reducer = combineReducers({products, users})

export default reducer