import {createSlice} from "@reduxjs/toolkit";

import {fetchFilteredStudents, fetchNewStudentsData} from "./studentsThunk";


const initialState = {
    filteredErrors: null,
    filteredStudents: [],
    filteredTeachers: [],
    filteredCurseTypes: [],
    filteredCurseLevel: [],
    newStudents: [],
    newStudentsStatus: "idle",
    deletedStudents: [],
    studyingStudents: []
}

export const studentsSlice = createSlice({
    name: "newStudentsSlice",
    initialState,
    reducers: {
        getFilteredStudentsStatus: (state) => {
            state.newStudentsStatus = "loading"
        },
        getFilteredStudentsData: (state, action) => {
            state.filteredStudents = action.payload.subjects_with_students
            state.filteredTeachers = action.payload.teachers
            state.filteredErrors = action.payload.errors
            state.newStudentsStatus = "success"
        },
        getCurseTypes: (state, action) => {
            state.filteredCurseTypes = action.payload
        },
        getCurseLevel: (state, action) => {
            state.filteredCurseLevel = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(fetchNewStudentsData.pending, state => {
                state.newStudentsStatus = "loading"
            })
            .addCase(fetchNewStudentsData.fulfilled, (state, action) => {
                state.newStudents = action.payload.new_students
                state.studyingStudents = action.payload.active
                console.log(action.payload, "new")
                state.newStudentsStatus = "success"
            })
            .addCase(fetchNewStudentsData.rejected, (state, action) => {
                state.newStudents = "error"
            })
            .addCase(fetchFilteredStudents.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchFilteredStudents.fulfilled, (state, action) => {
                state.filteredStudents = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchFilteredStudents.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
})

export default studentsSlice.reducer

export const {
    getFilteredStudentsData,
    getFilteredStudentsStatus,
    getCurseTypes,
    getCurseLevel
} = studentsSlice.actions
