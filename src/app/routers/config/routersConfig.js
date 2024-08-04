
import {
    getRouteTaskManager,
    getVacancyWorkPage,
    getRouteStudents,
    getRouteTimePage,
    getRouteRegister,
    getRouteTeacher,
    getRouteGroups,
    getRouteRooms,
    getTeacherProfile,
    getVacancyPage,
    getRouteMain, getProfile,
    getDirectorRouteStudents,
    getRoomsProfilePage,
} from "shared/const/routers";


import {StudentsPage} from "pages/studentsPage";
import {GroupsPage} from "pages/groupsPage";
import {Register} from "pages/registerPage";
import {Rooms} from "pages/roomsPage";
import {HomePage} from "pages/homePage";
import {TeachersPage} from "pages/teacherPage";
import {ProfileTeacherPage} from "pages/profilePage";
import {VacancyPage} from "pages/vacancyPage";
import {VacancyWorkPage} from "pages/vacancyWorkPage";
import {StudentsDirectorPage} from "pages/studentsPage";
import {TimePage} from "pages/timePage";
import {EmployerPage} from "pages/employeesPage";
import {FlowsPage} from "pages/flowsPage";
import {RoomsProfilePage} from "pages/roomsProiflePage";
import {StudentProfilePage} from "pages/profilePage";


export const routersConfig = [
    {
        to: "home",
        name: "Bosh Sahifa",
        icon: "fa-home",
        roles: [true],
        path: getRouteMain(),
        // element: <HomePage/>,
        element: null,
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
        isMenu: false
    },
    {
        to: "profile",
        name: "Student Profile",
        icon: "fa-user-graduate",
        roles: [],
        path: getProfile(":id"),
        element: <StudentProfilePage/>,
        isMenu: false
    },
    // {
    //   to: "vacancyPage",
    //   name: "Vakansiyalar",
    //   icon: "fa-tasks",
    //   roles: [],
    //   path: getVacancyPage(),
    //   element: <VacancyPage/>,
    //   isMenu: true
    // },
    {
        to: "timeTable",
        name: "Time Table",
        icon: "fa-tasks",
        roles: [],
        path: getRouteTimePage(),
        element: <TimePage/>,
        isMenu: true
    },
    {
        to: "vacancyPage/vacancyWorkPage",
        roles: [],
        path: getVacancyWorkPage(),
        element: <VacancyWorkPage/>,
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
        to: "rooms/roomsProfilePage",
        name: "Rooms Profile",
        path: getRoomsProfilePage(":id"),
        element: <RoomsProfilePage/>,
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