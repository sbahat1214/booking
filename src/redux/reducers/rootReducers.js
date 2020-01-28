import getCategories from './getCategories'
import { combineReducers } from 'redux'
import serviceReducer from './serviceReducer'




const rootReducer =  combineReducers({
    bookings: getCategories,
    service: serviceReducer
})


export default rootReducer