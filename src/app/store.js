
import {configureStore} from "@reduxjs/toolkit";
import {flowsProfileSlice} from "entities/flowsProfile";
import {groupProfileSlice} from "entities/profile/groupProfile";
import {searchSlice} from "features/searchInput";
import {registerUser} from "pages/registerPage";
import {loginSlice} from "pages/loginPage";
import {filteredTeachers} from "features/filters/teacherFilter";
import {filteredStudents} from "features/filters/studentsFilter";
import {filteredEmployees} from "features/filters/employeesFilter";
import {filteredGroups} from "features/filters/groupsFilter";
import {filteredRoomsSlice} from "features/filters/roomsFilter";
import {deletedGroupsSlice, groupsSlice} from "entities/groups";
// import {user} from "entities/user";
import {studentProfilePayment} from "entities/profile/studentProfile";
import {studentProfileBooks} from "entities/profile/studentProfile";
import {studentProfileRating} from "entities/profile/studentProfile";
import {roomsAddSlice} from "pages/roomsPage";
import {studentsDirectorSlice} from "pages/studentsPage"
import {timeTableListSlice} from "pages/timeTableListPage";
import {homeSlice} from "entities/centerHome";
import {teachers} from "entities/teachers"
import {newStudents} from "../entities/students";
import {employerCategorySlice, employers} from "../entities/employer";
import {roomsSlice} from "../entities/rooms";
import {roomssSlice} from "../features/roomsEditModal";
import {capital} from "../entities/capital";
import {roomDeleteSlice} from "features/roomDeleteModal/model";
import {roomsImageAddSlice} from "features/roomImageAddModal/model";
import {
    studentProfile,
    teacherProfileData
} from "pages/profilePage";
import {userProfileSlice} from "entities/profile/userProfile"
import {flowsSlice} from "entities/flows";
import {teacherParseSlice} from "entities/teachers";
import {employerParseSlice} from "../entities/profile/employerProfile";
import {vacancySlice} from "../features/vacancyModals/vacancyPageAdd";
import {vacancyPageParseSlice} from "../features/vacancyModals/vacancyPageAdd";
import {vacancyWorkPageSlice} from "../features/vacancyModals/vacancyWorkPage/model";
import {vacancyWorkerPermissionSlice} from "../features/vacancyModals/vacancyWorkerPermission";
import {roomImageSlice} from "features/roomImagePareModal";
// import {timeTableSchool} from "pages/timeTable"
import {
    accountingSlice,
    capitalSlice,
    employerSlice,
    overHeadSlice,
    studentSlice,
    teacher
} from "../entities/accounting";
import {postBranch, postEducation, postSystem} from "../entities/creates";
import {
    getBranchSlice, getEducation,
    getLocationSlice,
    systemSlice
} from "../entities/editCreates";
import {teacherSalarySlice} from "../entities/teacherSalary";
import {employerSalarySlice} from "../entities/employerSalary";
import {giveEmployerSalarySlice} from "../pages/giveSalaryPage";
import {giveEmployerSalarySlices} from "features/giveEmployerSalary";
import {giveTeacherSalarySlices} from "../features/giveSalary/giveSalary";
import {teacherSalaryDeleteSlice} from "../features/salaryEdits";
import {employerSalaryDeleteSlice} from "../features/salaryEdits";
import {calendarSlice} from "pages/calendarPage";
import {vacancyWorkerSoucre, userSetPermissionSlice} from "../entities/vacancy/ui/vacancyWorkerList";
import {vacancyWorkerSlice} from "../features/vacancyWorkerList";
import {studentPaymentSlice} from "../features/studentPayment";
import {schoolTeacherDaySlice} from "../features/teacherModals";
import {inkasatsiyaSlice} from "../entities/inkasatsiya";
import {timeTableTuronSlice} from "pages/timeTable"
import {alertSlice} from "features/alert"
import {classSlice} from "../entities/class";
import {locationsSlice} from "features/locations"
import {themeSwitcherSlice} from "features/themeSwitcher"
import {branchSwitcherSlice} from "features/branchSwitcher"
import {multiPageSlice} from "widgets/multiPage"
import {teacherGroupSlice} from "entities/teachers";

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
        searchSlice,
        registerUser,
        loginSlice,
        filteredTeachers,
        filteredStudents,
        filteredEmployees,
        filteredGroups,
        filteredRoomsSlice,
        groupsSlice,
        studentProfilePayment,
        studentProfileBooks,
        studentProfileRating,
        studentsDirectorSlice,
        deletedGroupsSlice,
        // user,
        newStudents,
        employers,
        teachers,
        homeSlice,
        studentProfile,
        timeTableListSlice,
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
        // timeTableSchool,
        userProfileSlice,
        vacancyWorkerPermissionSlice,
        teacherSalarySlice,
        employerSalarySlice,
        giveEmployerSalarySlice,
        giveEmployerSalarySlices,
        calendarSlice,
        getLocationSlice,
        postEducation,
        getEducation,
        timeTableTuronSlice,
        studentSlice,
        employerSlice,
        teacher,
        giveTeacherSalarySlices,
        teacherSalaryDeleteSlice,
        employerSalaryDeleteSlice,
        vacancyWorkerSoucre,
        userSetPermissionSlice,
        vacancyWorkerSlice,
        studentPaymentSlice,
        groupProfileSlice,
        overHeadSlice,
        capitalSlice,
        inkasatsiyaSlice,
        alertSlice,
        schoolTeacherDaySlice,
        locationsSlice,
        themeSwitcherSlice,
        branchSwitcherSlice,
        multiPageSlice,
        flowsProfileSlice,
        classSlice,
        employerCategorySlice,
        teacherGroupSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            stringMiddleware
        ),
    devTools: process.env.NODE_ENV !== "production",
})

