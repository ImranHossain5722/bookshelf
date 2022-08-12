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

export const quickView = (data) =>{
    return {
        type : ActionTypes.QUICKVIEW,
        payload: data
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

export const allUsers = (users) =>{
    return {
        type : ActionTypes.ALLUSER,
        payload: users
    }
}

export const allPublishers = (users) =>{
    return {
        type : ActionTypes.ALLPUBLISHER,
        payload: users
    }
}

export const allAuthors = (users) =>{
    return {
        type : ActionTypes.ALLAUTHORS,
        payload: users
    }
}

export const MyOrder = (order) =>{
    return {
        type : ActionTypes.MYORDER,
        payload: order
    }
}

export const allOrders = (orders) =>{
    return {
        type : ActionTypes.ALLORDERS,
        payload: orders
    }
}

export const myProfile = (user) =>{
    return {
        type : ActionTypes.MYPROFILE,
        payload: user
    }
}

export const orderHistory = (orders) =>{
    return {
        type : ActionTypes.ORDERHISTORYS,
        payload: orders
    }
}

export const cartBooks = (books) =>{
    return {
        type : ActionTypes.CART_BOOKS,
        payload: books
    }
}

export const selectedBooks = (book) =>{
    return {
        type : ActionTypes.SELECTED_BOOKS,
        payload: book
    }
}

export const whistlist = (books) =>{
    return {
        type : ActionTypes.WHISTLIST,
        payload: books
    }
}

export const allBooks = (books) =>{
    return {
        type : ActionTypes.ALLBOOKS,
        payload: books
    }
}

export const cartdata = (books) =>{
    return {
        type : ActionTypes.CURRENT_CART,
        payload: books
    }
}

