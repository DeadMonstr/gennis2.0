

import {configureStore} from "@reduxjs/toolkit";

import {search} from "features/searchInput";
import {registerUser} from 'pages/register';
import {loginSlice} from "pages/login";
import {filteredTeachers} from "features/filters/teacherFilter";
import {filteredStudents} from "features/filters/studentsFilter";
import {filteredEmployees} from "features/filters/employeesFilter";
import {filteredGroups} from "features/filters/groupsFilter";
import {filteredRooms} from "features/filters/roomsFilter";
import {groups} from "entities/groups/index";
import {user} from "entities/user";
import {studentProfilePayment} from "entities/profile";
import {studentProfileBooks} from "entities/profile";
import {studentProfileRating} from "entities/profile";
import {roomsAddSlice} from 'pages/rooms/index'


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
        filteredRooms,
        groups,
        user,
        studentProfilePayment,
        studentProfileBooks,
        studentProfileRating,
        roomsAddSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            stringMiddleware
        ),
    devTools: process.env.NODE_ENV !== "production",
})

