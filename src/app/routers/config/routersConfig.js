
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
    getTeacherProfile,
    getVacancyPage,
    getDirectorRouteStudents,
} from "shared/const/routers";


import {NewStudents} from "pages/newStudentsPage";
import {DeletedStudents} from "pages/deletedStudents";
import {Students} from "pages/students";
import {GroupsPage} from "pages/groupsPage";
import {DeletedGroups} from "pages/deletedGroups";
import {Register} from "pages/register";
import {Rooms} from "pages/rooms/ui/rooms";
import {Teacher} from "pages/teacher";
import {CreateGroup} from "pages/createGroup";
import {HomePage} from "pages/homePage";
import {ProfileTeacherPage} from "pages/profileTeacherPage";
import {VacancyPage} from "pages/vacancyPage";
import {StudentsDirectorPage} from "pages/studentsPage";


export const routersConfig = [
    {
        to: "home",
        name: "Bosh Sahifa",
        icon: "fa-home",
        roles: [true],
        path: getRouteMain(),
        element: <HomePage/>,
        isMenu: true
    },
    {
        to: "taskManager",
        name: "Task Manager",
        icon: "fa-tasks",
        roles: [true],
        path: getRouteTaskManager(":id"),
        element: null,
        isMenu: true
    },
    {
        to: "newStudents",
        name: "Yangi O'quvchilar",
        icon: "fa-user",
        roles: [true],
        path: getRouteNewStudents(":id"),
        element: <NewStudents/>,
        isMenu: true
    },
    {
        to: "deletedStudents",
        name: "O'chirilgan O'quvchilar",
        icon: "fa-user-alt-slash",
        roles: [],
        path: getRouteDeletedStudents(":id"),
        element: <DeletedStudents/>,
        isMenu: true
    },
    {
        to: "students",
        name: "O'qiyotgan O'quvchilar",
        icon: "fa-user-graduate",
        roles: [],
        path: getRouteStudents(":id"),
        element: <Students/>,
        isMenu: true
    },
    {
        to: "studentsDirector",
        name: "O'quvchilar",
        icon: "fa-user-graduate",
        roles: [],
        path: getDirectorRouteStudents(),
        element: <StudentsDirectorPage/>,
        isMenu: true
    },
    {
        to: "groups",
        name: "Gruppalar",
        icon: "fa-users",
        roles: [],
        path: getRouteGroups(":id"),
        element: <GroupsPage/>,
        isMenu: true
    },
    {
        to: "newStudents/createGroup",

        icon: "fa-user",
        roles: [],
        path: getRouteCreateGroup(":id"),
        element: <CreateGroup/>,
        isMenu: false
    },
    {
        to: "deletedGroups",
        name: "O'chirilgan Gruppalar",
        icon: "fa-user-alt-slash",
        roles: [],
        path: getRouteDeletedGroups(":id"),
        element: <DeletedGroups/>,
        isMenu: true
    },
    {
        to: "teacher",
        name: "O'qituvchilar",
        icon: "fa-user-tie",
        roles: [],
        path: getRouteTeacher(":id"),
        element: <Teacher/>,
        isMenu: true
    },
    {
        to: "vacancy",
        name: "Vakansiyalar",
        icon: "fa-user-tie",
        roles: [],
        path: getVacancyPage(),
        element: <VacancyPage/>,
        isMenu: true
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
        isMenu: false
    },
    {
        to: "rooms",
        name: "Honalar",
        icon: "fa-door-closed",
        roles: [],
        path: getRouteRooms(),
        element: <Rooms/>,
        isMenu: true
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
        isMenu: true
    }

]