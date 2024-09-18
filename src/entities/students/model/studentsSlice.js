import {createSlice} from "@reduxjs/toolkit";

import {
    fetchClassColors,
    fetchClassNumberList,
    fetchFilteredStudents,
    fetchOnlyNewStudentsData,
    fetchOnlyStudyingStudentsData,
    fetchSchoolStudents,
    fetchNewStudentsDataWithBranch,
    fetchStudyingStudentsDataWithBranch,
    fetchOnlyDeletedStudentsData, fetchStudentsByClass, fetchDeletedNewStudentsThunk
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
    deletedStudents: [],
    filteredByClassStudents: [],
    filteredByClass: "idle",
    newStudentsStatus: "idle",
    studyingStudentsStatus: "idle",
    branchStudents: [],
    branchStStudents: [],
    branchStStudentsLoading: false,
    loading: false,
    error: null
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
        },
        stopFilteredStudentsLoading: (state) => {
            state.newStudentsStatus = "idle"
        },
    },
    extraReducers: builder =>
        builder
            .addCase(fetchOnlyNewStudentsData.pending, state => {
                state.newStudentsStatus = "loading"
            })
            .addCase(fetchOnlyNewStudentsData.fulfilled, (state, action) => {
                state.newStudentes = action.payload
                state.newStudentsStatus = "success"
            })
            .addCase(fetchOnlyNewStudentsData.rejected, (state, action) => {
                state.newStudentsStatus = "error"
            })

            .addCase(fetchDeletedNewStudentsThunk.pending, state => {
                state.newStudentsStatus = "loading"
            })
            .addCase(fetchDeletedNewStudentsThunk.fulfilled, (state, action) => {
                state.newStudentes = action.payload
                console.log(action.payload, 'efefewfe')
                state.newStudentsStatus = "success"
            })
            .addCase(fetchDeletedNewStudentsThunk.rejected, (state, action) => {
                state.newStudentsStatus = "error"
            })

            .addCase(fetchStudentsByClass.pending, state => {
                state.filteredByClass = "loading"
            })
            .addCase(fetchStudentsByClass.fulfilled, (state, action) => {
                state.filteredByClassStudents = action.payload
                state.filteredByClass = "success"
            })
            .addCase(fetchStudentsByClass.rejected, (state, action) => {
                state.filteredByClass = "error"
            })



            .addCase(fetchOnlyStudyingStudentsData.pending, state => {
                state.studyingStudentsStatus = "loading"
            })
            .addCase(fetchOnlyStudyingStudentsData.fulfilled, (state, action) => {
                state.studyingStudents = action.payload
                state.studyingStudentsStatus = "success"
            })
            .addCase(fetchOnlyStudyingStudentsData.rejected, (state, action) => {
                state.studyingStudentsStatus = "error"
            })



            .addCase(fetchOnlyDeletedStudentsData.pending, state => {
                state.loading = "loading"
                state.error = null
            })
            .addCase(fetchOnlyDeletedStudentsData.fulfilled, (state, action) => {
                state.deletedStudents = action.payload
                state.loading = false
            })
            .addCase(fetchOnlyDeletedStudentsData.rejected, (state, action) => {
                state.error = action.error.message
                state.loading = false
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
                state.schoolClassNumbers = action.payload
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
                state.schoolClassColors = action.payload
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
                state.newStudentes = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchNewStudentsDataWithBranch.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })



            .addCase(fetchStudyingStudentsDataWithBranch.pending, state => {
                state.branchStStudentsLoading = true
                state.error = null
            })
            .addCase(fetchStudyingStudentsDataWithBranch.fulfilled, (state, action) => {
                state.branchStStudents = action.payload
                state.branchStStudentsLoading = false
                state.error = null
            })
            .addCase(fetchStudyingStudentsDataWithBranch.rejected, (state, action) => {
                state.branchStStudentsLoading = false
                state.error = action.payload ?? null
            })
})

export default studentsSlice.reducer

export const {
    getFilteredStudentsData,
    getFilteredStudentsStatus,
    getCurseTypes,
    getCurseLevel,
    stopFilteredStudentsLoading
} = studentsSlice.actions
