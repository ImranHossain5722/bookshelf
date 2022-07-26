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

export const author = (author) =>{
    return {
        type : ActionTypes.AUTHOR,
        payload: author
    }
}