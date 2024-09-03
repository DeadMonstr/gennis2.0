import {ROLES} from "shared/const/roles";

export const menuConfig = [
    {
        to: "home",
        name: "Bosh Sahifa",
        icon: "fa-home",
        system: ["center","school"],
        roles: true
    },
    {
        to: "register",
        name: "Registratsiya",
        icon: "fa-edit",
        system: ["center","school"],
        roles: true
    },
    {
        to: "taskManager",
        name: "Task Manager",
        icon: "fa-tasks",
        system: ["center","school"],
        roles: [ROLES.director,ROLES.admin],

    },
    {
        to: "calendar",
        name: "Kalendar",
        icon: "fas fa-calendar-times",
        system: ["school"],
        roles: [ROLES.director,ROLES.admin],

    },
    {
        to: "students",
        name: "O'quvchilar",
        icon: "fa-user-graduate",
        system: ["center","school"],
        roles: [ROLES.admin,ROLES.director,ROLES.programmer]
    },
    {
        to: "groups",
        name: "Gruppalar",
        icon: "fa-users",
        system: ["center","school"],
        roles: [ROLES.admin,ROLES.director,ROLES.programmer]

    },
    {
        to: "teacher",
        name: "O'qituvchilar",
        icon: "fa-user-tie",
        system: ["center","school"],
        roles: [ROLES.admin,ROLES.director,ROLES.programmer]

    },
    {
        to: "vacancyPage",
        name: "Vakansiyalar",
        icon: "fa-tasks", // Bu element director uchun filtrlanadi
        system: ["center","school"],
        roles: [ROLES.director,ROLES.programmer]
    },
    {
        to: "timeList",
        name: "Time List",
        icon: "fa-clock",
        system: ["center","school"],

        roles: [ROLES.admin,ROLES.director,ROLES.programmer]

    },
    {
        to: "employer",
        name: "Employers",
        icon: "fa-user-graduate",
        system: ["center","school"],

        roles: [ROLES.admin,ROLES.director,ROLES.programmer]

    },
    {
        to: "flows",
        name: "Flows",
        icon: "fa-user-graduate",
        system: ["school"],

        roles: [ROLES.admin,ROLES.director,ROLES.programmer]

    },
    {
        to: "class",
        name: "Class",
        icon: "fa-user-graduate",
        system: ["school"],

        roles: [ROLES.admin,ROLES.director,ROLES.programmer]
    },
    {
        to: "contract",
        name: "Contract",
        icon: "fa-file-contract",
        system: ["center","school"],

        roles: [ROLES.admin,ROLES.director,ROLES.programmer]

    },
    {
        to: "capital",
        name: "Capital",
        icon: "fa-book",
        system: ["center","school"],

        roles: [ROLES.admin,ROLES.director,ROLES.programmer,ROLES.accountant]

    },
    {
        to: "accounting",
        name: "Bugalteriya",
        icon: "fa-calculator",
        system: ["center","school"],

        roles: [ROLES.admin,ROLES.director,ROLES.programmer]

    },
    {
        to: "rooms",
        name: "Honalar",
        icon: "fa-door-closed",
        system: ["center","school"],
        roles: [ROLES.admin,ROLES.director,ROLES.programmer]

    },

];
