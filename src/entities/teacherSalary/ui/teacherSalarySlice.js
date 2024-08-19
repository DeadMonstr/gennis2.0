import { createSlice } from "@reduxjs/toolkit";
import { fetchTeacherSalaryIdThunk, fetchTeacherSalaryThunk } from "./teacherSalaryThunk";
import {giveTeacherSalaryThunk} from "../../../features/giveSalary/giveSalary/model/giveTeacherSalaryThunk";

const initialState = {
    salaryData: [],
    salaryDatas: [],
    loading: false,
    error: null,
}

export const teacherSalarySlice = createSlice({
    name: "teacherSalarySlice",
    initialState,
    reducers: {
        // You can add any additional reducers here if needed
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTeacherSalaryThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTeacherSalaryThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.salaryData = action.payload;
                console.log(action.payload, "salaryData");
            })
            .addCase(fetchTeacherSalaryThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchTeacherSalaryIdThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTeacherSalaryIdThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.salaryDatas = action.payload;
            })
            .addCase(fetchTeacherSalaryIdThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(giveTeacherSalaryThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.salaryData.push(action.payload);
            })
            .addCase(giveTeacherSalaryThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(giveTeacherSalaryThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default teacherSalarySlice.reducer;
