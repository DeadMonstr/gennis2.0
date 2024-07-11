

import {configureStore} from "@reduxjs/toolkit";

import {search} from "features/searchInput";
import {registerUser} from 'pages/register';
import {loginSlice} from "pages/login/model/loginSlice";
import {filteredTeachers} from "features/filters/teacherFilter";
import {filteredStudents} from "features/filters/studentsFilter";
import {filteredEmployees} from "features/filters/employeesFilter";
import {filteredGroups} from "features/filters/groupsFilter";
import {filteredRooms} from "features/filters/roomsFilter";



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
        loginSlice,
        filteredTeachers,
        filteredStudents,
        filteredEmployees,
        filteredGroups,
        filteredRooms
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            stringMiddleware
        ),
    devTools: process.env.NODE_ENV !== "production",
})

