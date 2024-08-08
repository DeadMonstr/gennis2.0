import { createSlice } from "@reduxjs/toolkit";
import { editTeacherThunk, fetchTeacherId } from "./teacherParseThunk";

const initialState = {
    teacherId: [],
    loading: false,
    error: null
};

export const teacherParseSlice = createSlice({
    name: "teacherParseSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTeacherId.pending, state => { state.fetchTeacherStatus = 'loading' })
            .addCase(fetchTeacherId.fulfilled, (state, action) => {
                state.fetchTeacherStatus = 'success';
                state.teacherId = action.payload;
            })
            .addCase(fetchTeacherId.rejected, state => { state.fetchTeacherStatus = "error" })
            .addCase(editTeacherThunk.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editTeacherThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.teacherId = {
                    ...state.teacherId,
                    ...action.payload
                };
            })
            .addCase(editTeacherThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default teacherParseSlice.reducer;
