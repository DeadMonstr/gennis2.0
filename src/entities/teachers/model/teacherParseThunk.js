import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, useHttp, headers} from "../../../shared/api/base";

export const fetchTeacherId = createAsyncThunk(
    "teacherParseSlice/fetchTeacherId",
    async (id) => {
        const {request} = useHttp();
        return await request(`${API_URL}Teachers/teachers/${id}`, "GET", null, headers())
    }
)

export const editTeacherThunk = createAsyncThunk (
    "teacherEditSlice/editTeacherThunk",
    async ({id, updateTeacher}) => {
        const {request} = useHttp();
        return await request(`${API_URL}Users/users/update/${id}/`, "PATCH", JSON.stringify(updateTeacher))
    }
)