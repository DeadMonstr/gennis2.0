import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";

export const getStudentPayment = createAsyncThunk(
    "otchotSlice/getStudentPayment",
    (branchID) => {
        const {request} = useHttp()

        return request(`${API_URL}Encashment/student_payments/?branch=${branchID}` , "GET" , null , headers())
    }
)


// export const getTeacherSalary = createAsyncThunk(
//     "otchotSlice/getTeacherSalary",
//     () => {
//         const {request} = useHttp()
//         return request(`${API_URL}Encashment/`)
//
//     }
// )