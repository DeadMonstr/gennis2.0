import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";
//Class/class_colors/
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

