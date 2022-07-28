import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { ActionTypes } from "../Constants/ActionTypes";


const defState = {
    books : [],
    author:[],
    user:{},
    popularBooks:[],
    category:[]
}

export const sellBookReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.SELL_BOOKS:
            return {...state, books : payload};
    
        default:
            return state;
    }
}

export const addCartReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.ADD_CART:
            return {...state, books : payload};
    
        default:
            return state;
    }
}

export const authorsReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.AUTHOR:
            return { 
                author : payload
            }
    
        default:
            return state;
    }
}

export const userReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.NEWUSER:
           
            return { 
                user : payload
            };
    
        default:
            return state;
    }
}

export const popularBookReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.POPULARBOOKS:
          
            return {
                popularBooks : payload
            };
    
        default:
            return state;
    }
}

export const categoryReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.CATEGORY:
          
            return {
                category : payload
            };
    
        default:
            return state;
    }
}