
import {
    getRouteTaskManager,
    getRouteRegister,
    getRouteStudents,
    getRouteGroups,
    getRouteMain,
    getRouteTeacher,
    getRouteRooms,
    getTeacherProfile,
    getVacancyPage,
    getVacancyWorkPage,
    getDirectorRouteStudents,
} from "shared/const/routers";


import {StudentsPage} from "pages/studentsPage";
import {GroupsPage} from "pages/groupsPage";
import {Register} from "pages/register";
import {Rooms} from "pages/rooms/ui/rooms";
import {HomePage} from "pages/homePage";
import {TeachersPage} from "pages/teacherPage";
import {ProfileTeacherPage} from "pages/profileTeacherPage";
import {VacancyPage} from "../../../pages/vacancyPage";
import {VacancyWorkPage} from "../../../pages/vacancyWorkPage";
import {StudentsDirectorPage} from "pages/studentsPage";
import {EmployerPage} from "pages/employeesPage";
import {FlowsPage} from "../../../pages/flowsPage";


export const routersConfig = [
    {
        to: "home",
        name: "Bosh Sahifa",
        icon: "fa-home",
        roles: [true],
        path: getRouteMain(),
        element: <HomePage/>,
        isMenu: true,
        type: ["app_center_theme", "app_school_theme"]
    },
    {
        to: "taskManager",
        name: "Task Manager",
        icon: "fa-tasks",
        roles: [true],
        path: getRouteTaskManager(":id"),
        element: null,
        isMenu: true,
        type: ["app_center_theme", "app_school_theme"]
    },
    {
        to: "studentsDirector",
        name: "O'quvchilar",
        icon: "fa-user-graduate",
        roles: [],
        path: getDirectorRouteStudents(),
        element: <StudentsDirectorPage/>,
        isMenu: true,
        type: ["app_center_theme", "app_school_theme"]

    },
    {
        to: "students",
        name: " O'quvchilar",
        icon: "fa-user-graduate",
        roles: [],
        isMenu: true,
        path: getRouteStudents(":id"),
        element: <StudentsPage/>
    },
    {
        to: "groups",
        name: "Gruppalar",
        icon: "fa-users",
        roles: [],
        isMenu: true,
        path: getRouteGroups(":id"),
        element: <GroupsPage/>
    },
    {
        to: "teacher",
        name: "O'qituvchilar",
        icon: "fa-user-tie",
        roles: [],
        isMenu: true,
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
        to: "teacherProfile",
        name: "Teacher Profile",
        icon: "fa-user-graduate",
        roles: [],
        path: getTeacherProfile("id"),
        element: <ProfileTeacherPage/>,
        isMenu: false,
        type: ["app_center_theme", "app_school_theme"]
    },
    {
      to: "vacancyPage",
      name: "Vakansiyalar",
      icon: "fa-tasks",
      roles: [],
      path: getVacancyPage(),
      element: <VacancyPage/>,
      isMenu: true
    },
    {
        to: "vacancyPage/vacancyWorkPage",
        roles: [],
        path: getVacancyWorkPage(),
        element: <VacancyWorkPage/>,
        isMenu: false
    },
    {
        to: "employer",
        name: "Employers",
        icon: "fa-user-graduate",
        roles: [],
        path: getTeacherProfile("id"),
        element: <EmployerPage/>,
        isMenu: true,
        type: ["app_center_theme", "app_school_theme"]
    },
    {
        to: "flows",
        name: "Flows",
        icon: "fa-user-graduate",
        roles: [],
        path: getTeacherProfile("id"),
        element: <FlowsPage/>,
        isMenu: true,
        type: ["app_school_theme"]
    },
    {
        to: "rooms",
        name: "Honalar",
        icon: "fa-door-closed",
        roles: [],
        path: getRouteRooms(),
        element: <Rooms/>,
        isMenu: true,
        type: ["app_center_theme", "app_school_theme"]
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
        to: "register",
        name: "Registratsiya",
        icon: "fa-edit",
        roles: [],
        path: getRouteRegister(":id"),
        element: <Register/>,
        isMenu: true,
        type: ["app_center_theme", "app_school_theme"]
    },

]