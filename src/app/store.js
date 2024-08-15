import {configureStore} from "@reduxjs/toolkit";

import {search} from "features/searchInput";
import {registerUser} from "../pages/registerPage";
import {loginSlice} from "pages/loginPage";
import {filteredTeachers} from "features/filters/teacherFilter";
import {filteredStudents} from "features/filters/studentsFilter";
import {filteredEmployees} from "features/filters/employeesFilter";
import {filteredGroups} from "features/filters/groupsFilter";
import {filteredRooms} from "features/filters/roomsFilter";
import {deletedGroups, groups} from "entities/groups/index";
import {user} from "entities/user";
import {studentProfilePayment} from "entities/profile/studentProfile";
import {studentProfileBooks} from "entities/profile/studentProfile";
import {studentProfileRating} from "entities/profile/studentProfile";
import {roomsAddSlice} from 'pages/roomsPage'
import {studentsDirectorSlice} from "pages/studentsPage"
import {timeTable} from "pages/timeTableListPage";
import {newStudents} from "../entities/students";
import {employers} from "../entities/employer";
import {roomsSlice} from "../entities/rooms";
import {homeSlice} from "entities/home";
import {teachers} from "entities/teachers"
import {
    studentProfile,
    teacherProfileData,
    userProfile
} from "pages/profilePage";
import {flowsSlice} from "entities/flows";
import {roomssSlice} from "../features/roomsEditModal";
import {roomsEditModalSlice} from "features/roomEditModal/model";
import {roomDeleteSlice} from "features/roomDeleteModal/model";
import {roomsImageAddSlice} from "features/roomImageAddModal/model";
import {roomImageSlice} from "features/roomImagePareModal";
import {timeTableSchool} from "pages/timeTable"

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
        studentProfilePayment,
        studentProfileBooks,
        studentProfileRating,
        studentsDirectorSlice,
        deletedGroups,
        user,
        newStudents,
        employers,
        teachers,
        homeSlice,
        studentProfile,
        timeTable,
        roomsAddSlice,
        roomsSlice,
        flowsSlice,
        teacherProfileData,
        userProfile,
        roomssSlice,
        roomsEditModalSlice,
        roomDeleteSlice,
        roomsImageAddSlice,
        roomImageSlice,
        timeTableSchool
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            stringMiddleware
        ),
    devTools: process.env.NODE_ENV !== "production",
})

