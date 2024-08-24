import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";

export const getTeacherSalary = createAsyncThunk(
    "teacherSalary/getTeacherSalary",
    async () => {
        const {request} =useHttp()
        return await request(`${API_URL}Teachers/teacher-salary-list/` , "GET" , null , headers())
    }
)

export const changePaymentType = createAsyncThunk(
    "teacherSalary/changePaymentType",
    async () => {
        const {request} = useHttp()
    }
)