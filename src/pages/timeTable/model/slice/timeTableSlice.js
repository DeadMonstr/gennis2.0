import {createSlice} from "@reduxjs/toolkit";

import {
    fetchTimeTableClassData,
    fetchTimeTableColorData,
    fetchTimeTableTeacherData,
} from "../thunk/timeTableThunk";

const initialState = {
    classData: null,
    colorData: null,
    teachersData: null,
    loading: false,
    error: null
}

const timeTableSlice = createSlice({
    name: "timeTableSlice",
    initialState,
    reducers: {
        addCurrentData: (state, action) => {
            state.data = action.payload
        },
        changeCurrentData: (state, action) => {
            state.data = state.data.map(item => {
                if (item.dayId === action.payload.dayId) {
                    return item.subjects.map(i => {
                        if (i.subjectsId === action.payload.subjectsId) {
                            return {
                                subject: action.payload.subject,
                                teacher: action.payload.teacher,
                                room: action.payload.room
                            }
                        } else return i
                    })
                } else return item
            })
        }
    },
    extraReducers: builder =>
        builder
            .addCase(fetchTimeTableClassData.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTimeTableClassData.fulfilled, (state, action) => {
                console.log(action.payload, "data class")
                state.classData = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchTimeTableClassData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
            .addCase(fetchTimeTableColorData.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTimeTableColorData.fulfilled, (state, action) => {
                console.log(action.payload, "data color")
                state.colorData = action.payload?.classcolors
                state.loading = false
                state.error = null
            })
            .addCase(fetchTimeTableColorData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
            .addCase(fetchTimeTableTeacherData.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTimeTableTeacherData.fulfilled, (state, action) => {
                console.log(action.payload, "data teacher")
                state.teachersData = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchTimeTableTeacherData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
})

export default timeTableSlice.reducer

export const {
    addCurrentData,
    changeCurrentData
} = timeTableSlice.actions

