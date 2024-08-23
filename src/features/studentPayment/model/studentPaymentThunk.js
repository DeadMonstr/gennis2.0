import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, useHttp, headers} from "../../../shared/api/base";


export const studentPaymentThunk = createAsyncThunk(
    'studentPaymentSlice/studentPaymentThunk',
     (newPayment) => {
        const {request} = useHttp()
        return  request(`${API_URL}Students/student_payment_create/`, "POST", JSON.stringify(newPayment), headers())
    }
)