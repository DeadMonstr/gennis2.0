import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, useHttp, headers} from "../../../shared/api/base";


export const studentPaymentThunk = createAsyncThunk(
    'studentPaymentSlice/studentPaymentThunk',
    async (newPayment) => {
        const { request } = useHttp();
        return  await request(`${API_URL}Students/student_payment_create/`, "POST", JSON.stringify(newPayment), headers());

    }
)

export const studentCharityThunk = createAsyncThunk(
    'studentPaymentSlice/studentCharityThunk',
    async (newCharity) => {
        const {request} = useHttp();
        return await request(`${API_URL}Students/student_charities_create/`, "POST", JSON.stringify(newCharity), headers())
    }
)

export const studentGroupHistoryThunk = createAsyncThunk(
    'studentPaymentSlice/studentGroupHistoryThunk',
    async (id) => {
        const {request} = useHttp();
        return await request(`${API_URL}Students/student_history_groups/${id}`, "GET", null, headers())
    }
)

export const studentTotalAddendanceThunk = createAsyncThunk(
    'studentPaymentSlice/studentTotalAddendanceThunk',
    async (id) => {
        const {request} = useHttp();
        return await request(`${API_URL}Attendance/attendance_list/${id}/`, "GET", null, headers())
    }
)