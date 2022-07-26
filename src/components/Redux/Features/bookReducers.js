import { ActionTypes } from "../Constants/ActionTypes";


const defState = {
    books : [],
    author:[]
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
            return {...state, author : payload};
    
        default:
            return state;
    }
}