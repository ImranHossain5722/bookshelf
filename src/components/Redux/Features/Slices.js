import React from 'react'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
export const fetchSellings = createAsyncThunk('books/fetchSellings', async () => {
    const {data} = await axios.get('data.json')
   return data;
})

export const Books = createSlice({
    name:"books",
    initialState:{
        isLoading : false,
        books: [],
        error : null
    },
  
    

})

export default Books.reducer