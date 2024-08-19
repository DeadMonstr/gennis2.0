import {createSlice} from "@reduxjs/toolkit";
import {giveTeacherSalaryThunk} from "./giveTeacherSalaryThunk";

const initialState = {
    salaries: [],
    loading: false,
    error: null
}

const giveTeacherSalarySlices = createSlice({
    name: "giveTeacherSalarySlices",
    initialState,
    reducers: {
        addSalary: (state, action) => {
            console.log("Adding salary:", action.payload);
            state.salaries.push(action.payload);
            console.log("Updated salaries:", state.salaries);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(giveTeacherSalaryThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(giveTeacherSalaryThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.salaries.push(action.payload);
                console.log("Thunk fulfilled. Updated salaries:", state.salaries);
            })
            .addCase(giveTeacherSalaryThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});


export const {addSalary} = giveTeacherSalarySlices.actions;

export default giveTeacherSalarySlices.reducer;
