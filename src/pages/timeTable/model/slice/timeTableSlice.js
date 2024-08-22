import {createSlice} from "@reduxjs/toolkit";

import {
    addTimeTableData,
    fetchTimeTableClassData,
    fetchTimeTableColorData, fetchTimeTableData,
    fetchTimeTableTeacherData,
} from "../thunk/timeTableThunk";

const initialState = {
    classData: null,
    colorData: null,
    teachersData: null,
    timeTableData: [],
    currentTimeTableData: null,
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
        },
        addIdForTimeTableData: (state, action) => {
            console.log(action.payload, 'payload')
            state.timeTableData = [
                ...state.timeTableData.filter(item => item.id !== action.payload.id),
                {id: action.payload.id, data: action.payload.data}
            ]
        },
        clearTimeTableData: (state, action) => {
            console.log(action.payload, "payload filter")
            state.timeTableData = state.timeTableData.filter(item => action.payload.includes(item.id))
        }
    },
    extraReducers: builder =>
        builder
            .addCase(fetchTimeTableClassData.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTimeTableClassData.fulfilled, (state, action) => {
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
                state.teachersData = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchTimeTableTeacherData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
            .addCase(fetchTimeTableData.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTimeTableData.fulfilled, (state, action) => {
                state.currentTimeTableData = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchTimeTableData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
            .addCase(addTimeTableData.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(addTimeTableData.fulfilled, (state, action) => {
                state.timeTableData = state.timeTableData.map(item => {
                    if (item.id === action.payload.group.id) {
                        return {
                            id: item.id,
                            data: {
                                hours_list: item.data.hours_list,
                                time_tables: item.data.time_tables.map(i => {
                                    if (i.weekday.id === action.payload.week.id) {
                                        return {
                                            weekday: {
                                                id: i.weekday.id,
                                                name: i.weekday.name,
                                                lessons: i.weekday.lessons.map(iI => {
                                                    if (iI.hour.id === action.payload.hours.id) {
                                                        return {
                                                            flow: action.payload.flow,
                                                            hour: action.payload.hours,
                                                            id: action.payload.id,
                                                            room: {
                                                                id: action.payload.room.id,
                                                                name: action.payload.room.name
                                                            },
                                                            subject: {
                                                                id: action.payload.subject.id,
                                                                name: action.payload.subject.name
                                                            },
                                                            teacher: {
                                                                id: action.payload.teacher.id,
                                                                name: action.payload.teacher.name,
                                                                surname: action.payload.teacher.surname
                                                            },
                                                            status: true
                                                        }
                                                    } else return iI
                                                })
                                            }
                                        }
                                    } else return i
                                })
                            }
                        }
                    } else return item
                })
                state.loading = false
                state.error = null
            })
            .addCase(addTimeTableData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
})

export default timeTableSlice.reducer

export const {
    addCurrentData,
    changeCurrentData,
    addIdForTimeTableData,
    clearTimeTableData
} = timeTableSlice.actions

