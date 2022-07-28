import React from 'react'
import { configureStore } from "@reduxjs/toolkit";
import { sellBookReducer,addCartReducer, authorsReducer,popularBookReducer, categoryReducer, allUserReducer, allPublisherReducer, allAuthorReducer, allOrdersReducer, myorderReducer, myProfileReducer, orderHistoryReducer } from '../Features/bookReducers';




const store = configureStore({
    reducer: {
        sellBooks : sellBookReducer,
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
        OrderHistory : orderHistoryReducer
    }
})

export default store