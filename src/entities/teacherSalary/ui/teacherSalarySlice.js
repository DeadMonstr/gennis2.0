import {createSlice} from "@reduxjs/toolkit";
import {fetchTeacherSalaryThunk} from "./teacherSalaryThunk";


const initialState = {
    salaryData: [],
    loading: false,
    erroor: null
}


export const teacherSalarySlice = createSlice({
    name: "teacherSalarySlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTeacherSalaryThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchTeacherSalaryThunk.fulfilled, (state, action) => {
                state.loading = false
                state.salaryData = action.payload
                console.log(action.payload, "salaryData")
            })
            .addCase(fetchTeacherSalaryThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
})

export default teacherSalarySlice.reducer