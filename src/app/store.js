
import {configureStore} from "@reduxjs/toolkit";
import {search} from "features/searchInput";
import {registerUser} from "pages/registerPage";
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
import {roomsAddSlice} from "pages/roomsPage";
import {studentsDirectorSlice} from "pages/studentsPage"
import {timeTable} from "pages/timeTableListPage";
import {homeSlice} from "entities/home";
import {teachers} from "entities/teachers"
import {newStudents} from "../entities/students";
import {employers} from "../entities/employer";
import {roomsSlice} from "../entities/rooms";
import {roomssSlice} from "../features/roomsEditModal";
import {capital} from "../entities/capital";
import {roomDeleteSlice} from "features/roomDeleteModal/model";
import {roomsImageAddSlice} from "features/roomImageAddModal/model";
import {
    studentProfile,
    teacherProfileData,
    userProfile
} from "pages/profilePage";
import {flowsSlice} from "entities/flows";
import {teacherParseSlice} from "entities/teachers";
import {employerParseSlice} from "../entities/profile/employerProfile";
import {vacancySlice} from "../features/vacancyModals/vacancyPageAdd";
import {vacancyPageParseSlice} from "../features/vacancyModals/vacancyPageAdd";
import {vacancyWorkPageSlice} from "../features/vacancyModals/vacancyWorkPage/model";
import {vacancyWorkerPermissionSlice} from "../features/vacancyModals/vacancyWorkerPermission";
import {roomImageSlice} from "features/roomImagePareModal";
import {timeTableSchool} from "pages/timeTable"
import {accountingSlice, studentSlice} from "../entities/accounting";
import {postBranch, postEducation, postSystem} from "../entities/creates";
import {
    getBranchSlice, getEducation,
    getLocationSlice,
    systemSlice
} from "../entities/editCreates";
import {teacherSalarySlice} from "../entities/teacherSalary";
import {employerSalarySlice} from "../entities/employerSalary";
import {giveEmployerSalarySlice} from "../pages/giveSalaryPage";
import {giveEmployerSalarySlices} from "../features/giveEmployerSalary";
import {giveTeacherSalarySlices} from "../features/giveSalary/giveSalary";
import {teacherSalaryDeleteSlice} from "../features/salaryEdits";
import {employerSalaryDeleteSlice} from "../features/salaryEdits";
import {calendarSlice} from "pages/calendarPage";
import {vacancyWorkerSoucre, userSetPermissionSlice} from "../entities/vacancy/ui/vacancyWorkerList";
import {vacancyWorkerSlice} from "../features/vacancyWorkerList";
import {studentPaymentSlice} from "../features/studentPayment";

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
        roomssSlice,
        // roomsEditModalSlice,
        roomDeleteSlice,
        roomsImageAddSlice,
        roomImageSlice,
        flowsSlice,
        teacherProfileData,
        teacherParseSlice,
        capital,
        employerParseSlice,
        vacancySlice,
        vacancyPageParseSlice,
        vacancyWorkPageSlice,
        accountingSlice,
        postSystem,
        systemSlice,
        postBranch,
        getBranchSlice,
        timeTableSchool,
        userProfile,
        vacancyWorkerPermissionSlice,
        teacherSalarySlice,
        employerSalarySlice,
        giveEmployerSalarySlice,
        giveEmployerSalarySlices,
        calendarSlice,
        getLocationSlice,
        postEducation,
        getEducation,
        studentSlice,
        giveTeacherSalarySlices,
        teacherSalaryDeleteSlice,
        employerSalaryDeleteSlice,
        vacancyWorkerSoucre,
        userSetPermissionSlice,
        vacancyWorkerSlice,
        studentPaymentSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            stringMiddleware
        ),
    devTools: process.env.NODE_ENV !== "production",
})

