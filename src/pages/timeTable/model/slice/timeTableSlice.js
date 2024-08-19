import {createSlice} from "@reduxjs/toolkit";

import {fetchTimeTableData} from "../thunk/timeTableThunk";

const initialState = {
    data: null,
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
            .addCase(fetchTimeTableData.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTimeTableData.fulfilled, (state, action) => {
                console.log(action.payload, "data")
                state.data = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchTimeTableData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
})

export default timeTableSlice.reducer

export const {
    addCurrentData,
    changeCurrentData
} = timeTableSlice.actions

