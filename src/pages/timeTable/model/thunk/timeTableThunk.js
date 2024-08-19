import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";
//Class/class_colors/
// Teachers/teachers-for-branches/
// /SchoolTimeTable/class-timetable/
export const fetchTimeTableClassData = createAsyncThunk(
    "timeTableSlice/fetchTimeTableData",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}SchoolTimeTable/timetable-classes/`, "GET", null, headers())
    }
)

export const fetchTimeTableColorData = createAsyncThunk(
    "timeTableSlice/fetchTimeTableColorData",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}Class/class_colors/`, "GET", null, headers())
    }
)

export const fetchTimeTableTeacherData = createAsyncThunk(
    "timeTableSlice/fetchTimeTableTeacherData",
    async (id) => {
        const {request} = useHttp()
        return await request(`${API_URL}Teachers/teachers-for-branches/${id}`, "GET", null, headers())
    }
)

export const fetchTimeTableData = createAsyncThunk(
    "timeTableSlice/fetchTimeTableData",
    async (id) => {
        const {request} = useHttp()
        return await request(`${API_URL}/SchoolTimeTable/class-timetable/${id}`, "GET", null, headers())
    }
)

