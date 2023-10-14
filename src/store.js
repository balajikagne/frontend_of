import { combineReducers } from 'redux';
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllitemsReducer, getItemByIdReducer } from './Reducers/itemReducers'
import {addtoCartReducer} from './Reducers/cartReducer'
import { registerUserReducer } from './Reducers/UserReducer';
import { loginUserReducer } from './Reducers/UserReducer';
import {placeOrderReducer}  from './Reducers/orderReducer';
import { AdditemsReducer } from './Reducers/itemReducers';
import { getItemById } from './actions/MenuActions';
import { allOrdersReducer } from './Reducers/orderReducer';
import { getUserOrderReducer } from './Reducers/orderReducer';
const finalReducer =combineReducers({
    getAllitemsReducer:getAllitemsReducer,
    addtoCartReducer : addtoCartReducer,
    registerUserReducer :registerUserReducer,
    loginUserReducer :loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    AdditemsReducer:AdditemsReducer,
    getItemById:getItemById,
    allOrdersReducer:allOrdersReducer,
    getUserOrderReducer:getUserOrderReducer,
    getItemByIdReducer:getItemByIdReducer
})
const cartItems=localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]
const currentUser=localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')):null
const initialState ={
    addtoCartReducer:{
        cartItems:cartItems
    },
    loginUserReducer:{
        currentUser:currentUser
    }
    
}

const composeEnhancers=composeWithDevTools({})

const store=createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default store;