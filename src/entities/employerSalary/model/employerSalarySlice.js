import {createSlice} from "@reduxjs/toolkit";
import {fetchEmployerSalaryThunk} from "./employerSalaryThunk";


const initialState = {
    salaryData: [],
    loading: false,
    erroor: null
}


export const employerSalarySlice = createSlice({
    name: "teacherSalarySlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchEmployerSalaryThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchEmployerSalaryThunk.fulfilled, (state, action) => {
                state.loading = false
                state.salaryData = action.payload
                console.log(action.payload, "salaryData")
            })
            .addCase(fetchEmployerSalaryThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
})

export default employerSalarySlice.reducer