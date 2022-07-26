import React from 'react'
import { configureStore } from "@reduxjs/toolkit";
import { sellBookReducer,addCartReducer, authorsReducer } from '../Features/bookReducers';



const store = configureStore({
    reducer: {
        sellBooks : sellBookReducer,
        addCart : addCartReducer,
        author: authorsReducer 
    }
})

export default store