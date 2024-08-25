import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";

export const getTeacherSalary = createAsyncThunk(
    "teacherSalary/getTeacherSalary",
    async () => {
        const {request} =useHttp()
        return await request(`${API_URL}Teachers/teacher-salary-list/?status=False` , "GET" , null , headers())
    }
)

export const getDeletedTeacherSalary = createAsyncThunk(
    "teacherSalary/getDeletedTeacherSalary",
    async () => {
        const {request} =useHttp()
        return await request(`${API_URL}Teachers/teacher-salary-list/?status=True` , "GET" , null , headers())
    }
)

export const changePaymentType = createAsyncThunk(
    "teacherSalary/changePaymentType",
    async () => {
        const {request} = useHttp()
    }
)