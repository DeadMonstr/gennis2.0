import {createSlice} from "@reduxjs/toolkit";

import {
    fetchClassColors,
    fetchClassNumberList,
    fetchFilteredStudents,
    fetchNewStudentsData,
    fetchSchoolStudents
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
    newStudents: [],
    newStudentsStatus: "idle",
    studyingStudentsStatus: "idle",
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
            // .addCase(fetchNewStudentsData.pending, state => {
            //     state.newStudentsStatus = "loading"
            // })
            // .addCase(fetchNewStudentsData.fulfilled, (state, action) => {
            //     state.newStudents = action.payload.new_students
            //     state.studyingStudents = action.payload.active
            //     console.log(action.payload, "new")
            //     state.newStudentsStatus = "success"
            // })
            // .addCase(fetchNewStudentsData.rejected, (state, action) => {
            //     state.newStudents = "error"
            // })
            .addCase(fetchOnlyNewStudentsData.pending, state => {
                state.newStudentsStatus = "loading"
            })
            .addCase(fetchOnlyNewStudentsData.fulfilled, (state, action) => {
                state.newStudents = action.payload
                state.studyingStudents = action.payload.active
                console.log(action.payload, "new")
                state.newStudentsStatus = "success"
            })
            .addCase(fetchOnlyNewStudentsData.rejected, (state, action) => {
                state.newStudents = "error"
            })


            .addCase(fetchOnlyStudyingStudentsData.pending, state => {
                state.studyingStudentsStatus = "loading"
            })
            .addCase(fetchOnlyStudyingStudentsData.fulfilled, (state, action) => {
                state.studyingStudents = action.payload
                state.studyingStudents = action.payload.active
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
})

export default studentsSlice.reducer

export const {
    getFilteredStudentsData,
    getFilteredStudentsStatus,
    getCurseTypes,
    getCurseLevel
} = studentsSlice.actions
