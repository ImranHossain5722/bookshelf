import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { cartBooks } from "../actions/bookActions";
import { ActionTypes } from "../Constants/ActionTypes";


const defState = {
    books : [],
    author:[],
    user:{},
    popularBooks:[],
    category:[],
    allUsers : [],
    allAuthors : [],
    allOrders : [],
    allPublishers : [],
    OrderHistory : [],
    myOrder : {},
    myProfile : {},
    cartBooks : [],
    selectedBooks : {},
    wishlistBooks : [],
    allBooks : [],
    cartData : {},
    quickView : {},
    orderView : {},
    commentId : undefined

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

export const allUserReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.ALLUSER:
          
            return {
                allUsers : payload
            };
    
        default:
            return state;
    }
}

export const allPublisherReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.ALLPUBLISHER:
          
            return {
                allPublishers : payload
            };
    
        default:
            return state;
    }
}

export const allAuthorReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.ALLAUTHORS:
          
            return {
                allAuthors : payload
            };
    
        default:
            return state;
    }
}

export const allOrdersReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.ALLORDERS:
          
            return {
                allOrders : payload
            };
    
        default:
            return state;
    }
}

export const myorderReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.MYORDER:
          
            return {
                myOrder : payload
            };
    
        default:
            return state;
    }
}

export const myProfileReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.MYPROFILE:
          
            return {
                myProfile : payload
            };
    
        default:
            return state;
    }
}

export const orderHistoryReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.ORDERHISTORYS:
          
            return {
                OrderHistory : payload
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

export const cartBooksReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.CART_BOOKS:
          
            return {
                ...cartBooks,
                cartBooks : payload
            };
    
        default:
            return state;
    }
}

export const selectedBooksReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.SELECTED_BOOKS:
          
            return {
                selectedBooks : payload
            };
    
        default:
            return state;
    }
}

export const allBooksReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.ALLBOOKS:
          
            return {
                allBooks : payload
            };
    
        default:
            return state;
    }
}

export const wishlistReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.WHISTLIST:
          
            return {
                wishlistBooks : payload
            };
    
        default:
            return state;
    }
}
export const quickViewReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.QUICKVIEW:
          
            return {
                quickView : payload
            };
    
        default:
            return state;
    }
}
export const orderViewReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.ORDERVIEW:
          
            return {
                orderView : payload
            };
    
        default:
            return state;
    }
}
export const commentIdReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.COMMENTID:
          
            return {
                commentId : payload
            };
    
        default:
            return state;
    }
}
export const currentCartReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.CURRENT_CART:
          
            return {
                cartData : payload
            };
    
        default:
            return state;
    }
}
