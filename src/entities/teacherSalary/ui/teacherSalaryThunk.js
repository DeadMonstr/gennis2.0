import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, useHttp, headers} from "../../../shared/api/base";


export const  fetchTeacherSalaryThunk = createAsyncThunk(
    "teacherSalarySlice/fetchTeacherSalaryThunk",
    async (id) => {
        const {request} = useHttp();
        return await  request(`${API_URL}Teachers/teacher-salary-list/${id}/`)
    }
)