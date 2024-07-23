
import {
    getRouteDeletedStudents,
    getRouteDeletedGroups,
    getRouteNewStudents,
    getRouteTaskManager,
    getRouteRegister,
    getRouteStudents,
    getRouteGroups,
    getRouteMain,
    getRouteTeacher,
    getRouteCreateGroup,
    getRouteRooms,
} from "shared/const/routers";

import {StudentsPage} from "pages/studentsPage";
import {GroupsPage} from "pages/groupsPage";

import {Register} from "pages/register";
import {Rooms} from "pages/rooms/ui/rooms";
import {TeachersPage} from "pages/teacherPage";

import {HomePage} from "pages/homePage";


export const routersConfig = [
    {
        to: "home",
        name: "Bosh Sahifa",
        icon: "fa-home",
        roles: [true],
        path: getRouteMain(),
        element: <HomePage/>
    },
    {
        to: "taskManager",
        name: "Task Manager",
        icon: "fa-tasks",
        roles: [true],
        path: getRouteTaskManager(":id"),
        element: null
    },

    {
        to: "students",
        name: " O'quvchilar",
        icon: "fa-user-graduate",
        roles: [],
        path: getRouteStudents(":id"),
        element: <StudentsPage/>
    },
    {
        to: "groups",
        name: "Gruppalar",
        icon: "fa-users",
        roles: [],
        path: getRouteGroups(":id"),
        element: <GroupsPage/>
    },
    {
        to: "teacher",
        name: "O'qituvchilar",
        icon: "fa-user-tie",
        roles: [],
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
        to: "rooms",
        name: "Honalar",
        icon: "fa-door-closed",
        roles: [],
        path: getRouteRooms(),
        element: <Rooms/>
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
        element: <Register/>
    }

]