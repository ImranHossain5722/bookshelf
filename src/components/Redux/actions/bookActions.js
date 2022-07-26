import { ActionTypes } from "../Constants/ActionTypes";


export const sellBooks = (books) =>{
    return {
        type : ActionTypes.SELL_BOOKS,
        payload: books
    }
}

export const addCart = (books) =>{
    return {
        type : ActionTypes.ADD_CART,
        payload: books
    }
}

export const newUser = (user) =>{
    return {
        type : ActionTypes.NEWUSER,
        payload: user
    }
}

export const author = (author) =>{
    return {
        type : ActionTypes.AUTHOR,
        payload: author
    }
}

export const popularBooks = (books) =>{
    return {
        type : ActionTypes.POPULARBOOKS,
        payload: books
    }
}

export const category = (books) =>{
    return {
        type : ActionTypes.CATEGORY,
        payload: books
    }
}