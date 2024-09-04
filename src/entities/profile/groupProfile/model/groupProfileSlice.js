import {createSlice} from "@reduxjs/toolkit";
import {
    fetchFilteredStudentsAndTeachers,
    fetchGroupProfileTimeTable,
    changeGroupProfile,
    fetchGroupProfile,
    fetchReasons,
    fetchFilteredStudents,
    fetchFilteredTeachers,
    fetchFilteredGroups,
    fetchWeekDays,
    createWeekDays,
    moveGroup,
    filteredStudents, fetchGroupProfileNextLesson
} from "./groupProfileThunk";

const initialState = {
    data: null,
    nextLessonData: null,
    filteredTeachers: null,
    filteredStudents: null,
    filteredGroups: null,
    timeTable: null,
    weekDays: null,
    reasons: null,
    loading: false,
    studentsLoading: false,
    error: null
}

const groupProfileSlice = createSlice({
    name: "groupProfileSlice",
    initialState,
    reducers: {
        getNextLesson: (state, action) => {
            state.nextLessonData = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(fetchGroupProfile.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchGroupProfile.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchGroupProfile.rejected, (state, action) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(changeGroupProfile.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(changeGroupProfile.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(changeGroupProfile.rejected, (state, action) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(moveGroup.pending, state => {
                state.loading = true
                state.error = "error"
            })
            .addCase(moveGroup.fulfilled, (state, action) => {
                state.data = action.payload.data
                state.error = action.payload.errors
                state.loading = false
            })
            .addCase(moveGroup.rejected, (state, action) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(filteredStudents.pending, state => {
                // state.loading = true
                // state.error = "error"
            })
            .addCase(filteredStudents.fulfilled, (state, action) => {
                console.log(action.payload, "payload")
                state.filteredStudents = action.payload.students
                // state.error = action.payload.errors
                // state.loading = false
            })
            .addCase(filteredStudents.rejected, (state, action) => {
                // state.loading = false
                // state.error = "error"
            })
            // .addCase(fetchFilteredTeachers.pending, state => {
            //     // state.loading = true
            //     // state.error = null
            // })
            // .addCase(fetchFilteredTeachers.fulfilled, (state, action) => {
            //     state.filteredTeachers = action.payload
            //     // state.loading = false
            //     // state.error = null
            // })
            // .addCase(fetchFilteredTeachers.rejected, (state, action) => {
            //     // state.loading = false
            //     // state.error = "error"
            // })
            // .addCase(fetchFilteredStudents.pending, state => {
            //     // state.loading = true
            //     // state.error = null
            // })
            // .addCase(fetchFilteredStudents.fulfilled, (state, action) => {
            //     state.filteredStudents = action.payload
            //     // state.loading = false
            //     // state.error = null
            // })
            // .addCase(fetchFilteredStudents.rejected, (state, action) => {
            //     // state.loading = false
            //     // state.error = "error"
            // })
            .addCase(fetchReasons.pending, state => {
                // state.loading = true
                // state.error = null
            })
            .addCase(fetchReasons.fulfilled, (state, action) => {
                state.reasons = action.payload
                // state.loading = false
                // state.error = null
            })
            .addCase(fetchReasons.rejected, (state, action) => {
                // state.loading = false
                // state.error = "error"
            })
            .addCase(fetchGroupProfileTimeTable.pending, state => {
                // state.loading = true
                // state.error = null
            })
            .addCase(fetchGroupProfileTimeTable.fulfilled, (state, action) => {
                state.timeTable = action.payload
                // state.loading = false
                // state.error = null
            })
            .addCase(fetchGroupProfileTimeTable.rejected, (state, action) => {
                // state.loading = false
                // state.error = "error"
            })
            .addCase(fetchFilteredStudentsAndTeachers.pending, state => {
                // state.loading = true
                // state.error = null
            })
            .addCase(fetchFilteredStudentsAndTeachers.fulfilled, (state, action) => {
                state.filteredTeachers = action.payload.teachers
                state.filteredStudents = action.payload.students
                // state.loading = false
                // state.error = null
            })
            .addCase(fetchFilteredStudentsAndTeachers.rejected, (state, action) => {
                // state.loading = false
                // state.error = "error"
            })
            .addCase(fetchFilteredGroups.pending, state => {
                // state.loading = true
                // state.error = null
            })
            .addCase(fetchFilteredGroups.fulfilled, (state, action) => {
                state.filteredGroups = action.payload
                // state.filteredStudents = action.payload.students
                // state.loading = false
                // state.error = null
            })
            .addCase(fetchFilteredGroups.rejected, (state, action) => {
                // state.loading = false
                // state.error = "error"
            })
            .addCase(fetchWeekDays.pending, state => {
                // state.loading = true
                // state.error = null
            })
            .addCase(fetchWeekDays.fulfilled, (state, action) => {
                state.weekDays = action.payload?.days?.map(item => ({...item, name: item.name_uz}))
                // state.filteredStudents = action.payload.students
                // state.loading = false
                // state.error = null
            })
            .addCase(fetchWeekDays.rejected, (state, action) => {
                // state.loading = false
                // state.error = "error"
            })
            .addCase(createWeekDays.pending, state => {
                // state.loading = true
                // state.error = null
            })
            .addCase(createWeekDays.fulfilled, (state, action) => {
                console.log(action.payload, "create")
                state.weekDays = action.payload.map(item => ({...item, name: item.name_uz}))
                // state.filteredStudents = action.payload.students
                // state.loading = false
                // state.error = null
            })
            .addCase(createWeekDays.rejected, (state, action) => {
                // state.loading = false
                // state.error = "error"
            })
})

export const {getNextLesson} = groupProfileSlice.actions
export default groupProfileSlice.reducer
