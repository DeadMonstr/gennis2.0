
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
    getTeacherProfile, getRoomsProfilePage,
    getClass, getEmployerPage
} from "shared/const/routers";


import {StudentsPage} from "pages/studentsPage";
import {GroupsPage} from "pages/groupsPage";
import {Register} from "pages/registerPage";
import {Rooms} from "pages/roomsPage";
import {TeachersPage} from "pages/teacherPage";
import {
    ProfileTeacherPage,
    UserProfilePage,
    StudentProfilePage
} from "pages/profilePage";
import {StudentsDirectorPage} from "pages/studentsPage";
import {VacancyPage} from "pages/vacancyPage";
import {VacancyWorkPage} from "pages/vacancyWorkPage";
import {TimeTableListPage} from "pages/timeTableListPage";
import {EmployerPage} from "pages/employeesPage";
import {FlowsPage} from "pages/flowsPage";
import {RoomsProfilePage} from "pages/roomsProiflePage";
import {ClassPage} from "../../../pages/classPage";
import {getEmployersData} from "../../../entities/employer/model/selector/employersSelector";
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
        to: "profile",
        name: "Student Profile",
        path: getProfile(":id"),
        element: <StudentProfilePage/>,
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
        path: getVacancyWorkPage(),
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
        path: getTeacherProfile("id"),
        element: <FlowsPage/>,
        isMenu: true,
        type: ["app_school_theme"]
    },
    {
        to: "class",
        name: "Class",
        icon: "fa-user-graduate",
        roles: [],
        path: getClass("id"),
        element: <ClassPage/>,
        isMenu: true,
        type: ["app_school_theme"]
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

]