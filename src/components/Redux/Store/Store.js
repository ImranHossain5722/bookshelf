import React from 'react'
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { sellBookReducer,addCartReducer, authorsReducer,popularBookReducer, categoryReducer, allUserReducer, allPublisherReducer, allAuthorReducer, allOrdersReducer, myorderReducer, myProfileReducer, orderHistoryReducer, selectedBooksReducer, cartBooksReducer, allBooksReducer } from '../Features/bookReducers';
const thunk = require('redux-thunk');

const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant').default(), thunk] :
  [thunk];

const store = configureStore({
    reducer: {
        sellBooks : sellBookReducer,
        allBooks : allBooksReducer,
        addCart : addCartReducer,
        author: authorsReducer ,
        popularBooks : popularBookReducer,
        category : categoryReducer,
        allUser : allUserReducer,
        allPublishers : allPublisherReducer,
        allAuthors : allAuthorReducer,
        allOrders : allOrdersReducer,
        myOrder : myorderReducer,
        myProfile : myProfileReducer,
        OrderHistory : orderHistoryReducer,
        cartBooks : cartBooksReducer,
        selectedBooks : selectedBooksReducer

    }
    
},applyMiddleware(...middleware)
)

export default store