

import {configureStore} from "@reduxjs/toolkit";

import {search} from "features/searchInput";



const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}


export const store = configureStore({
    reducer: {
        search
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            stringMiddleware
        ),
    devTools: process.env.NODE_ENV !== "production",
})

