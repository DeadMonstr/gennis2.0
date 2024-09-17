import {createSlice} from "@reduxjs/toolkit";
import {getStudentPayment} from "../thunk/otchotAccountingThunk";


const initialState = {
    loading: false,
    error: false,
    years: [],
    months: [],
    students: [],

}


const accountingOtchotSlice = createSlice({
    name: "otchotSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getStudentPayment.pending , state => {
                state.loading = true
                state.error = false
            })
            .addCase(getStudentPayment.fulfilled , (state, action) => {
                state.students =action.payload
                console.log(action.payload , "action.payload")
                state.loading = false
                state.error= false
            })
            .addCase(getStudentPayment.rejected , state => {
                state.loading = false
                state.error = true
            })
})

export default accountingOtchotSlice.reducer