import {ClassProfilePage} from "pages/School";
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
    getTeacherSalaryInsideSource,
    getContract,
    getCapital,
    getCapitalInside,
    getTeacherProfile,
    getRoomsProfilePage,
    getEmployerPage,
    getEmployerProfile,
    getBranch,
    getEducation,
    getSystem,
    getCreateBranch,
    getCreateEducation,
    getCreateLocation,
    getCreateSystem,
    getAccounting,
    getLocations,
    getRouteCreateGroup,
    getEmployerSalaryInsideSource,
    getEmployerSalary,
    getTeacherSalary, getInkasatsiya,
    getGroupHistory,
    getRouteClassProfile, getCapitalCategoryProfile,
     getRouteCalendar,

} from "shared/const/routers";


import {StudentsPage} from "pages/studentsPage";
import {GroupsPage, GroupCreatePage} from "pages/groupsPage";
import {Register} from "pages/registerPage";
import {Rooms} from "pages/roomsPage";
import {TeachersPage} from "pages/teacherPage";
import {
    ProfileTeacherPage,
    UserProfilePage,
    StudentProfilePage, ProfileEmployerPage, GroupProfilePage
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

import {getEmployersData} from "entities/employer/model/selector/employersSelector";
import {TeacherSalaryPage} from "pages/teacherSalaryPage";
import {EmployerSalaryPage} from "pages/employerSalaryPage";
import {GiveSalaryPage, GiveTeacherSalaryPage} from "pages/giveSalaryPage";
import {Branch, Education, Location, System} from "entities/editCreates";
import {BranchCreate, EducationCreate, LocationCreate, SystemCreate} from "entities/creates";
import {AccountingPageMain} from "pages/accountingPage";
import {Inkasatsiya} from "pages/inkasatsiyaPage";
import {AccountingBooks} from "entities/accounting";
// import Calendar from "react-calendar";
import {CalendarPage} from "pages/calendarPage";
import {TimeTable} from "pages/timeTable";
import {StudentProfileGroupsHistory} from "../../../entities/profile/studentProfile";
import {TimeTableTuronPage} from "pages/timeTable";
import {CategoryProfileProfile} from "entities/capital/ui/categoryProfileProfile/categoryProfileProfile"
import {CategoryProfile} from "../../../pages/capitalPage/ui/capitalCategoryProfile/categoryProfile";
import {ClassMain} from "../../../pages/classPage/ui/classMain";
// import {TimeTable} from "pages/timeTable";
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
    // {
    //     name: "O'quvchilar",
    //     path: getDirectorRouteStudents(),
    //     element: <StudentsDirectorPage/>,
    // },
    {
        name: "O'quvchilar",
        path: getRouteStudents(),
        element: <StudentsPage/>
    },
    {
        name: "Kalendar",
        path: getRouteCalendar(),
        element: <CalendarPage/>
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
    // {
    //     name: "Teacher Profile",
    //     path: getTeacherProfile(":id"),
    //     element: <ProfileTeacherPage/>,
    // },
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
        element: <ClassMain/>,
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
        path: "calendar",
        element: <CalendarPage/>,
    },
    {
        name: "Time Table",
        path: "time/*",
        element: <TimeTableTuronPage/>,
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
        name: "createBranch",
        path: getCreateBranch(":id"),
        element: <BranchCreate/>
    },

    {
        name: "createSystem",
        path: getCreateSystem(":id"),
        element: <SystemCreate/>
    },
    {
        name: "createLocation",
        path: getCreateLocation(":id"),
        element: <LocationCreate/>
    },
    {
        name: "createEducation",
        path: getCreateEducation(":id"),
        element: <EducationCreate/>
    },
    {
        name: "location",
        path: getLocations(":id"),
        element: <Location/>
    },
    {
        name: "branch",
        path: getBranch(":id"),
        element: <Branch/>
    },
    {
        name: "education",
        path: getEducation(":id"),
        element: <Education/>
    },
    {
        name: "system",
        path: getSystem(":id"),
        element: <System/>
    },
    {
        name: "accounting",
        path: getAccounting(":id"),
        element: <AccountingPageMain/>,
    },
    {
        name: "inkasatsiya",
        path: getInkasatsiya(":id"),
        element: <Inkasatsiya/>
    },
    {
        name: "History",
        path: getGroupHistory(":id"),
        element: <StudentProfileGroupsHistory/>
    },
    {
        name: "capital category profile",
        path: getCapitalCategoryProfile(":id"),
        element: <CategoryProfile/>
    },

]