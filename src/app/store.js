import {configureStore} from "@reduxjs/toolkit";
import {search} from "features/searchInput";
import {registerUser} from 'pages/register/model/registerThunk';
import {filteredTeacher} from "entities/filter/filterTeachers";
import {loginSlice} from "../pages/login/model/loginSlice";



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
        registerUser,
        filteredTeacher,
        loginSlice
    },
    devTools: process.env.NODE_ENV !== "production",
})

