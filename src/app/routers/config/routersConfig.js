import {
    getDirectorRouteStudents,
    getRouteUserProfile,
    getRouteTaskManager,
    getVacancyWorkPage,
    getRouteStudents,
    getRouteTimePage,
    getRouteRegister,
    getRouteTeacher,
    getRouteGroups,
    getVacancyPage,
    getRouteRooms,
    getRouteMain,
    getProfile,
    getClass,
    getFlow,
    getContract,
    getCapital,
    getCapitalInside,
    getTeacherProfile,
    getRoomsProfilePage,
    getEmployerPage,
    getEmployerProfile,
    getLocations
} from "shared/const/routers";


import {StudentsPage} from "pages/studentsPage";
import {GroupsPage} from "pages/groupsPage";
import {Register} from "pages/registerPage";
import {Rooms} from "pages/roomsPage";
import {TeachersPage} from "pages/teacherPage";
import {
    ProfileTeacherPage,
    UserProfilePage,
    StudentProfilePage, ProfileEmployerPage
} from "pages/profilePage";
import {StudentsDirectorPage} from "pages/studentsPage";
import {VacancyPage} from "pages/vacancyPage";
import {VacancyWorkPage} from "pages/vacancyWorkPage";
import {TimeTableListPage} from "pages/timeTableListPage";
import {EmployerPage} from "pages/employeesPage";
import {FlowsPage} from "pages/flowsPage";
import {RoomsProfilePage} from "pages/roomsProiflePage";
import {ClassPage} from "pages/classPage";
import {ContractPage} from "pages/contractPage";
import {CapitalInside, CapitalPage} from "pages/capitalPage";

import {getEmployersData} from "../../../entities/employer/model/selector/employersSelector";
import {Location} from "../../../entities/editCreates";
// import {RoomsProfilePage} from "pages/profilePage";


export const routersConfig = [
    {
        name: "Bosh Sahifa",
        path: getRouteMain(),
        // element: <HomePage/>,
        element: null,
    },
    {
        name: "Task Manager",
        path: getRouteTaskManager(":id"),
        element: null,
    },
    {
        name: "O'quvchilar",
        path: getDirectorRouteStudents(),
        element: <StudentsDirectorPage/>,
    },
    {
        name: " O'quvchilar",
        path: getRouteStudents(":id"),
        element: <StudentsPage/>
    },
    {
        name: "Gruppalar",
        path: getRouteGroups(":id"),
        element: <GroupsPage/>
    },
    {
        name: "O'qituvchilar",
        path: getRouteTeacher(":id"),
        element: <TeachersPage/>
    },
    {
        to: "/login",
        name: "Ishchilar",
        icon: "fa-id-badge",
        roles: []
    },
    {
        to: "/login",
        name: "Buxgalteriya Hisobi",
        icon: "fa-file-invoice-dollar",
        roles: []
    },
    {
        name: "Teacher Profile",
        path: getTeacherProfile(":id"),
        element: <ProfileTeacherPage/>,
    },
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
        name: "Time Table",
        path: getRouteTimePage(":id"),
        element: <TimeTableListPage/>,
    },
    {
        name: "Vakansiyalar",
        path: getVacancyPage(":id"),
        element: <VacancyPage/>,
    },
    {
        to: 'vacancyPage/vacancyWorkPage',
        path: getVacancyWorkPage(":id"),
        element: <VacancyWorkPage/>,
    },
    {

        name: "Employers",
        icon: "fa-user-graduate",
        roles: [],
        path: getEmployerPage(":id"),
        element: <EmployerPage/>,
    },
    {
        name: "Flows",
        path: getFlow(":id"),
        element: <FlowsPage/>,
    },
    {
        name: "Class",
        path: getClass(":id"),
        element: <ClassPage/>,
    },
    {
        path: getContract(":id"),
        name: "Contract",
        // icon: "fa fa-book",
        element: <ContractPage/>
    },
    {
        path: getCapital(":id"),
        name: "capital",
        element: <CapitalPage/>
    },

    {
        name: "Honalar",
        path: getRouteRooms(":id"),
        element: <Rooms/>,
    },
    {
        path: getRouteUserProfile(":id"),
        element: <UserProfilePage/>,
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
        to: "/login",
        name: "Capital Category",
        icon: "fa-coins",
        roles: []
    },
    {
        to: "/login",
        name: "Centre info",
        icon: "fa-info",
        roles: []
    },
    {
        to: "/login",
        name: "Kitoblar",
        icon: "fa-book",
        roles: []
    },
    {
        name: "Registratsiya",
        path: getRouteRegister(),
        element: <Register/>,
    },
    {
        name: "location",
        path: getLocations(":id"),
        element: <Location/>
    },
]