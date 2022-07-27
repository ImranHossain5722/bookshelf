import React from 'react'
import { configureStore } from "@reduxjs/toolkit";
import { sellBookReducer,addCartReducer, authorsReducer,popularBookReducer, categoryReducer } from '../Features/bookReducers';



const store = configureStore({
    reducer: {
        sellBooks : sellBookReducer,
        addCart : addCartReducer,
        author: authorsReducer ,
        popularBooks : popularBookReducer,
        category : categoryReducer
    }
})

export default store