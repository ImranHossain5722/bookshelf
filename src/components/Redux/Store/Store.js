import React from 'react'
import { configureStore } from "@reduxjs/toolkit";
import { sellings } from '../Features/Slices';


const store = configureStore({
    reducer: {
        sellBooks : sellings,

    }
})

export default store