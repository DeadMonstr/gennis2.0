import { createSlice } from "@reduxjs/toolkit";
import { editEmployerThunk, fetchEmployerId} from "./employerParseThunk";

const initialState = {
    employerId: [],
    loading: false,
    error: null
};

export const employerParseSlice = createSlice({
    name: "teacherParseSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchEmployerId.pending, state => { state.fetchTeacherStatus = 'loading' })
            .addCase(fetchEmployerId.fulfilled, (state, action) => {
                state.fetchTeacherStatus = 'success';
                state.employerId = action.payload;
            })
            .addCase(fetchEmployerId.rejected, state => { state.fetchTeacherStatus = "error" })
            .addCase(editEmployerThunk.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editEmployerThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.employerId = {
                    ...state.employerId,
                    ...action.payload
                };
            })
            .addCase(editEmployerThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })




    }
});

export default employerParseSlice.reducer;
