import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, useHttp} from "../../../../shared/api/base";

export const getTeacherSalary = createAsyncThunk(
    "teacherSalary/getTeacherSalary",
    async () => {
        const {request} =useHttp()
        return await request(`${API_URL}`)
    }
)

export const changePaymentType = createAsyncThunk(
    "teacherSalary/changePaymentType",
    async () => {
        const {request} = useHttp()
    }
)