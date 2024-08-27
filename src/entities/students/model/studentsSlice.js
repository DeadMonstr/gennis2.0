import {createSlice} from "@reduxjs/toolkit";

import {
    fetchClassColors,
    fetchClassNumberList,
    fetchFilteredStudents,
    fetchOnlyNewStudentsData,
    fetchOnlyStudyingStudentsData,
    fetchSchoolStudents,
    fetchNewStudentsDataWithBranch
} from "./studentsThunk";


const initialState = {
    filteredErrors: null,
    filteredStudents: [],
    filteredTeachers: [],
    filteredCurseTypes: [],
    filteredCurseLevel: [],
    schoolClassNumbers: [],
    schoolClassColors: [],
    schoolStudents: [],
    newStudentes: [],
    studyingStudents: [],
    newStudentsStatus: "idle",
    studyingStudentsStatus: "idle",
    deletedStudents: [],
    branchStudents: []
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
            .addCase(fetchOnlyNewStudentsData.pending, state => {
                state.newStudentsStatus = "loading"
            })
            .addCase(fetchOnlyNewStudentsData.fulfilled, (state, action) => {
                state.newStudentes = action.payload
                console.log(state.newStudentes, "new")
                state.newStudentsStatus = "success"
            })
            .addCase(fetchOnlyNewStudentsData.rejected, (state, action) => {
                state.newStudentes = "error"
            })



            .addCase(fetchOnlyStudyingStudentsData.pending, state => {
                state.studyingStudentsStatus = "loading"
            })
            .addCase(fetchOnlyStudyingStudentsData.fulfilled, (state, action) => {
                state.studyingStudents = action.payload
                console.log(action.payload, "studying")
                state.studyingStudentsStatus = "success"
            })
            .addCase(fetchOnlyStudyingStudentsData.rejected, (state, action) => {
                state.studyingStudents = "error"
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



            .addCase(fetchClassNumberList.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchClassNumberList.fulfilled, (state, action) => {
                state.schoolClassNumbers = action.payload?.classnumbers
                state.loading = false
                state.error = null
            })
            .addCase(fetchClassNumberList.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })



            .addCase(fetchClassColors.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchClassColors.fulfilled, (state, action) => {
                state.schoolClassColors = action.payload.classcolors
                state.loading = false
                state.error = null
            })
            .addCase(fetchClassColors.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })



            .addCase(fetchSchoolStudents.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchSchoolStudents.fulfilled, (state, action) => {
                state.schoolStudents = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchSchoolStudents.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })


            .addCase(fetchNewStudentsDataWithBranch.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchNewStudentsDataWithBranch.fulfilled, (state, action) => {
                state.branchStudents = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchNewStudentsDataWithBranch.rejected, (state, action) => {
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
