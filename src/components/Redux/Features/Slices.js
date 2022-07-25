import React from 'react'
import { createSlice } from "@reduxjs/toolkit";



export const Books = createSlice({
    name:"books",
    initialState:{
        books: []
    },
    reducers:{
        sellings : (state,{payload} ) => {
            state.books = payload
        },
        user : (state, {payload}) => {

        },
        Books : (state, {payload}) =>{

        },
        setCatagory: (state, {payload}) =>{

        },

    }

})
export const {sellings} = Books.actions;
export default Books.reducer