import {createSlice} from "@reduxjs/toolkit";

import {
    changeStudentProfileData,
    fetchStudentProfileData
} from "../thunk/studentProfileThunk";

const initialState = {
    data: null,
    loading: false,
    error: null
}

const StudentProfileSlice = createSlice({
    name: "studentProfile",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchStudentProfileData.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchStudentProfileData.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchStudentProfileData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
            .addCase(changeStudentProfileData.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(changeStudentProfileData.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(changeStudentProfileData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
})

export default StudentProfileSlice.reducer
