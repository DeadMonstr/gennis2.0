import {
    getRouteUserProfile,
    getVacancyWorkPage,
    getRouteRegister,
    getProfile,
    getTeacherSalaryInsideSource,
    getContract,
    getCapitalInside,
    getTeacherProfile,
    getRoomsProfilePage,
    getEmployerProfile,
    getBranch,
    getSystem,
    getLocations,
    getRouteCreateGroup,
    getEmployerSalaryInsideSource,
    getEmployerSalary,
    getTeacherSalary, getInkasatsiya,
    getGroupHistory,
    getRouteClassProfile
} from "shared/const/routers";


import {ClassProfilePage} from "pages/School";
import {GroupCreatePage} from "pages/groupsPage";
import {Register} from "pages/registerPage";
import {
    ProfileTeacherPage,
    UserProfilePage,
    StudentProfilePage, ProfileEmployerPage, GroupProfilePage
} from "pages/profilePage";
import {VacancyWorkPage} from "pages/vacancyWorkPage";
import {RoomsProfilePage} from "pages/roomsProiflePage";
import {ContractPage} from "pages/contractPage";
import {CapitalInside, CapitalPage} from "pages/capitalPage";
import {TeacherSalaryPage} from "pages/teacherSalaryPage";
import {EmployerSalaryPage} from "pages/employerSalaryPage";
import {GiveSalaryPage, GiveTeacherSalaryPage} from "pages/giveSalaryPage";
import {Branch, Education, Location, System} from "entities/editCreates";
import {Inkasatsiya} from "pages/inkasatsiyaPage";
import {StudentProfileGroupsHistory} from "entities/profile/studentProfile";

export const routersConfigProfile = [
    {
        to: "profile",
        name: "Student Profile",
        path: getProfile(":id"),
        element: <StudentProfilePage/>,
    },
    {
        to: "capitalBox",
        name: "capitalInside",
        path: getCapitalInside(":id"),
        element: <CapitalInside/>

    },
    {
        to: 'vacancyPage/vacancyWorkPage',
        path: getVacancyWorkPage(":id"),
        element: <VacancyWorkPage/>,
    },


    {
        path: getContract(":id"),
        name: "Contract",
        // icon: "fa fa-book",
        element: <ContractPage/>
    },


    {
        path: getRouteUserProfile(":id"),
        element: <UserProfilePage/>,
    },
    {
        path: getRouteCreateGroup(),
        element: <GroupCreatePage/>,
    },
    {
        path: "groups/groupInfo/:id",
        element: <GroupProfilePage/>,
    },
    {
        path: getRouteClassProfile(":id"),
        element: <ClassProfilePage/>
    },


    {
        name: "Rooms Profile",
        path: getRoomsProfilePage(":id"),
        element: <RoomsProfilePage/>,
        roles: [],
    },
    {
        to: "teacher/teacherProfile",
        name: "Teacher Profile",
        path: getTeacherProfile(":id"),
        element: <ProfileTeacherPage/>,
        roles: [],
    },
    {
        to: "employer/employerProfile",
        name: "Employer Page",
        path: getEmployerProfile(":id"),
        element: <ProfileEmployerPage/>,
        roles: [],
    },
    {
        name: "Teacher Salary",
        path: getTeacherSalary(":id"),
        element: <TeacherSalaryPage/>
    },
    {
        name: "Employer Salary",
        path: getEmployerSalary(":id"),
        element: <EmployerSalaryPage/>
    },
    {
        name: "Give salary",
        path: getEmployerSalaryInsideSource(":id", ":permission"),
        element: <GiveSalaryPage/>
    },
    {
        name: "Give salary",
        path: getTeacherSalaryInsideSource(":id"),
        element: <GiveTeacherSalaryPage/>
    },



    {
        name: "location",
        path: getLocations(":id"),
        element: <Location/>
    },
    {
        name: "branch",
        path: getBranch(":idBranch"),
        element: <Branch/>
    },
    {
        name: "system",
        path: getSystem(":id"),
        element: <System/>
    },
    {
        name: "inkasatsiya",
        path: getInkasatsiya(":idBranch"),
        element: <Inkasatsiya/>
    },
    {
        name: "History",
        path: getGroupHistory(":id"),
        element: <StudentProfileGroupsHistory/>
    },
    // {
    //     name: "capital category profile",
    //     path: getCapitalCategoryProfile(":id"),
    //     element: <CategoryProfile/>
    // },

]