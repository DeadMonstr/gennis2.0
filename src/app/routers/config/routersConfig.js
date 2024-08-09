
import {
    getDirectorRouteStudents,
    getRouteUserProfile,
    getRoomsProfilePage,
    getRouteTaskManager,
    getVacancyWorkPage,
    getTeacherProfile,
    getRouteStudents,
    getRouteTimePage,
    getRouteRegister,
    getRouteTeacher,
    getRouteGroups,
    getVacancyPage,
    getRouteRooms,
    getRouteMain,
    getProfile
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
        path: getTeacherProfile("id"),
        element: <ProfileTeacherPage/>,
    },
    {
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
        path: getTeacherProfile(":id"),
        element: <EmployerPage/>,
    },
    {
        name: "Flows",
        path: getTeacherProfile("id"),
        element: <FlowsPage/>,
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