import { combineReducers } from 'redux'
import productReducer from '../reducers/productReducer'
import srReducer from '../reducers/srReducer'


const rootReducer = combineReducers({
    productReducer: productReducer,
    srReducer: srReducer
})

export default rootReducer