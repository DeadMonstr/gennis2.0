

import {configureStore} from "@reduxjs/toolkit";

import {search} from "features/searchInput";
import {registerUser} from 'pages/register/model/userRegisterThunk';


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
        search,
        registerUser
    },
    devTools: process.env.NODE_ENV !== "production",
})

