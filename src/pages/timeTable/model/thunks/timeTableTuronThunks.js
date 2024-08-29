import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";

export const  fetchTimeTableWeekDays = createAsyncThunk(
    "TimeTableTuronSlice/fetchTimeTableWeekDays",
    async () => {
        const {request} = useHttp()
        return await  request(`${API_URL}TimeTable/week_days/`, "GET", null, headers())
    }
)


export const fetchTimeTableTypesData = createAsyncThunk(
    "TimeTableTuronSlice/fetchTimeTableTypesData",
    async (type) => {
        const {request} = useHttp()
        return await  request(`${API_URL}SchoolTimeTable/timetable-class-flow/?branch=25&type=${type}`, "GET", null, headers())
    }
)


export const fetchTimeTableData = createAsyncThunk(
    "TimeTableTuronSlice/fetchTimeTableData",
    async (data) => {
        const {request} = useHttp()
        return await  request(`${API_URL}SchoolTimeTable/timetable-lessons/?week=${data.id}&branch=25`, "GET", null, headers())
    }
)

export const fetchTimeTableSubject = createAsyncThunk(
    "TimeTableTuronSlice/fetchTimeTableSubject",
    async (id) => {
        const {request} = useHttp()
        return await  request(`${API_URL}Subjects/subject/`, "GET", null, headers())
    }
)


export const fetchTimeTableTeacher = createAsyncThunk(
    "TimeTableTuronSlice/fetchTimeTableTeacher",
    async (subject) => {
        const {request} = useHttp()
        return await  request(`${API_URL}Teachers/teachers-for-subject/?branch=25&subject=${subject}`, "GET", null, headers())
    }
)

export const fetchTimeTableColors = createAsyncThunk(
    "TimeTableTuronSlice/fetchTimeTableColors",
    async () => {
        const {request} = useHttp()
        return await  request(`${API_URL}Class/class_colors/`, "GET", null, headers())
    }
)