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
} from "../Features/bookReducers";
const thunk = require("redux-thunk");

const middleware =
  process.env.NODE_ENV !== "production"
    ? [require("redux-immutable-state-invariant").default(), thunk]
    : [thunk];

const store = configureStore(
  {
    reducer: {
      sellBooks: sellBookReducer,
      addCart: addCartReducer,
      author: authorsReducer,
      popularBooks: popularBookReducer,
      category: categoryReducer,
      allUser: allUserReducer,
      allPublishers: allPublisherReducer,
      allAuthors: allAuthorReducer,
      allOrders: allOrdersReducer,
      myOrder: myorderReducer,
      myProfile: myProfileReducer,
      OrderHistory: orderHistoryReducer,
    },
  },
  applyMiddleware(...middleware)
);

export default store;
