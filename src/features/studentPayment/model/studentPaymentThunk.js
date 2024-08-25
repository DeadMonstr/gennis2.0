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

export const studentDiscountThunk = createAsyncThunk(
    'studentPaymentSlice/studentDiscountThunk',
    async (newDiscount) => {
        const {request} = useHttp();
        return await request(`${API_URL}Students/student_payment_create/`, "POST", JSON.stringify(newDiscount), headers())
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
    async ({id, lastId}) => {
        const {request} = useHttp();
        return await request(`${API_URL}Attendance/attendance_list/${id}/?student_id=${lastId}`, "GET", null, headers())
    }
);


export const studentProfileTotalAmountThunk = createAsyncThunk(
    'studentPaymentSlice/studentProfileTotalAmountThunk',
    async () => {
        const {request} = useHttp();
        return await request(`${API_URL}Students/student_payment_list`, "GET", null, headers())
    }
)

export const studentProfileAttendanceDataThunk = createAsyncThunk(
    'studentPaymentSlice/studentProfileAttendanceDataThunk',
    async ({id, lastId}) => {
        const {request} = useHttp();
        return await request(`${API_URL}Attendance/attendance_datas_group/${id}/?student_id=${lastId}`, "GET", null, headers())
    }
)



export const studentProfileAttendanceDataPostThunk = createAsyncThunk(
    'studentPaymentSlice/studentProfileAttendanceDataPostThunk',
    async ({groupId, lastId, data}) => {
        const {request} = useHttp();
        const response = await request(`${API_URL}Attendance/attendance_list/${groupId}/?student_id=${lastId}`, "POST", JSON.stringify(data), headers());

        return response
    }
);


export const studentProfileAttendanceAll = createAsyncThunk(
    'studentPaymentSlice/studentProfileAttendanceAll',
    async (studentId) => {
        const {request} = useHttp();
        return await request(`${API_URL}Attendance/attendance_list_all/${studentId}/`, "GET", null, headers())
    }
)



export const studentProfileAttendanceAllDataThunk = createAsyncThunk(
    'studentPaymentSlice/studentProfileAttendanceAllDataThunk',
    async (id) => {
        const {request} = useHttp();
        return await request(`${API_URL}Attendance/attendance_datas_group_all/${id}/`, "GET", null, headers())
    }
)


export const studentProfileAttendanceAllDataPostThunk = createAsyncThunk(
    'studentPaymentSlice/studentProfileAttendanceAllDataPostThunk',
    async ({lastId, data}) => {
        const {request} = useHttp();
        const response = await request(`${API_URL}Attendance/attendance_list_all/${lastId}/`, "POST", JSON.stringify(data), headers());

        return response
    }
);


export const studentPaymentListThunk =  createAsyncThunk(
    'studentPaymentSlice/studentPaymentListThunk',
    async (id) => {
        const {request} = useHttp();
        return await request(`${API_URL}Students/student_payment/${id}`, "GET", null, headers())
    }
)