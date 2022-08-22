import React from "react";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import {
  sellBookReducer,
  addCartReducer,
  authorsReducer,
  popularBookReducer,
  categoryReducer,
  allUserReducer,
  allPublisherReducer,
  allAuthorReducer,
  allOrdersReducer,
  myorderReducer,
  myProfileReducer,
  orderHistoryReducer,
  selectedBooksReducer,
  cartBooksReducer,
  allBooksReducer,
  userReducer,
  wishlistReducer,
  currentCartReducer,
  quickViewReducer,
  orderViewReducer,
  commentIdReducer
} from "../Features/bookReducers";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    sellBooks: sellBookReducer,
    allBooks: allBooksReducer,
    addCart: addCartReducer,
    author: authorsReducer,
    popularBooks: popularBookReducer,
    category: categoryReducer,
    newUser: userReducer,
    allUser: allUserReducer,
    allPublishers: allPublisherReducer,
    allAuthors: allAuthorReducer,
    allOrders: allOrdersReducer,
    myOrder: myorderReducer,
    myProfile: myProfileReducer,
    wishlist: wishlistReducer,
    OrderHistory: orderHistoryReducer,
    cartBooks: cartBooksReducer,
    selectedBooks: selectedBooksReducer,
    quickView : quickViewReducer,
    cartData : currentCartReducer,
    orderView : orderViewReducer,
    commentId : commentIdReducer
  },
  middleware: [thunk],
  
});

export default store;
