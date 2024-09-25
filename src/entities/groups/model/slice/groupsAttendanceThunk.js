import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";



export const getAttendanceThunk  =createAsyncThunk(
    "groupAttendance/getAttendance",
    () => {
        const {request} = useHttp()

        return request(`${API_URL}Attendance/school-to-attend-days/` , "GET" , null , headers())
    }
)

// export const fetchAttendanceStudent = createAsyncThunk(
//     "groupAttendance/fetchAttendanceStudent",
//     ()=> {
//         const {request} = useHttp()
//         return request(`${API_URL}`)
//     }
// )