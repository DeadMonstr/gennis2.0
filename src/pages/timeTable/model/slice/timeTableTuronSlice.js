import {createSlice} from "@reduxjs/toolkit";
import {fetchTeacherProfileData} from "pages/profilePage/model/thunk/teacherProfile.thunk";
import {
    fetchTimeTableColors,
    fetchTimeTableData, fetchTimeTableSubject, fetchTimeTableTeacher,
    fetchTimeTableTypesData,
    fetchTimeTableWeekDays
} from "pages/timeTable/model/thunks/timeTableTuronThunks";

const initialState = {


    type: 'group',
    hours: [],
    data: [],
    group: [],
    flows: [],
    subjects: [],
    teachers: [],
    weekDays: [],
    colors: [],

    day: "",
    color: "",

    fetchStatusTeachers: "idle",
    loading: false,
    error: null
}

const TimeTableTuronSlice = createSlice({
    name: "TimeTableTuronSlice",
    initialState,
    reducers: {


        onChangeTypeTimeTable: (state, action) => {
            state.type = action.payload
        },

        onChangeDayTimeTable: (state, action) => {
            state.day = action.payload
        },

        onChangeColorTimeTable: (state, action) => {
            state.color = action.payload
        },
    },
    extraReducers: builder =>
        builder
            .addCase(fetchTimeTableColors.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTimeTableColors.fulfilled, (state, action) => {
                state.colors = action.payload.classcolors
                state.color = action.payload.classcolors[0].id
                state.loading = false
                state.error = null
            })
            .addCase(fetchTimeTableColors.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })


            .addCase(fetchTimeTableSubject.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTimeTableSubject.fulfilled, (state, action) => {
                state.subjects = action.payload.subjects.map((item,index) => {
                    return {
                        ...item,
                        dndId: `subject-${item.id}`,
                        type: "subject"
                    }
                })
                state.loading = false
                state.error = null
            })
            .addCase(fetchTimeTableSubject.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })


            .addCase(fetchTimeTableTeacher.pending, state => {
                state.loading = true
                state.error = null
                state.fetchStatusTeachers = "loading"
            })


            .addCase(fetchTimeTableTeacher.fulfilled, (state, action) => {


                state.teachers = action.payload.map((item,index) => {
                    return {
                        ...item,
                        dndId: `teacher-${item.id}`,
                        type: "teacher"
                    }
                })


                state.fetchStatusTeachers = "success"




                state.loading = false
                state.error = null
            })


            .addCase(fetchTimeTableTeacher.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
                state.fetchStatusTeachers = "error"
            })


            .addCase(fetchTimeTableWeekDays.pending, state => {
                state.loading = true
                state.error = null
            })

            .addCase(fetchTimeTableWeekDays.fulfilled, (state, action) => {
                state.weekDays = action.payload.days.map(item => {
                    return {
                        id: item.id,
                        name: item.name_uz
                    }
                })
                state.day = action.payload.today
                state.loading = false
                state.error = null
            })
            .addCase(fetchTimeTableWeekDays.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })


            .addCase(fetchTimeTableTypesData.pending, state => {
                state.loading = true
                state.error = null
            })


            .addCase(fetchTimeTableTypesData.fulfilled, (state, action) => {
                state.group = action.payload.map((item,index) => {
                    return {
                        ...item,
                        dndId: `${item.type}-${item.id}`,
                        type: item.type

                    }
                })



                state.loading = false
                state.error = null
            })
            .addCase(fetchTimeTableTypesData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })


            .addCase(fetchTimeTableData.pending, state => {
                state.loading = true
                state.error = null
            })


            .addCase(fetchTimeTableData.fulfilled, (state, action) => {

                let indexContainer = 1


                state.data = action.payload.time_tables.map(room => {

                    const newLessons = room.lessons.map(item => {
                        indexContainer += 1


                        if (item.group.id) {
                            return {
                                ...item,

                                group: {
                                    ...item.group,
                                    dndId: `group-${item.id}`,
                                    type: `group`
                                },
                                subject: {
                                    ...item.subject,
                                    dndId: `subject-${item.id}`,
                                    type: `subject`
                                },
                                teacher: {
                                    ...item.teacher,
                                    dndId: `teacher-${item.id}`,
                                    type: `teacher`
                                },
                                dndId: `container-${indexContainer}`,
                                isSelected: false,
                                isDisabled: false
                            }
                        }


                        return {
                            ...item,
                            dndId: `container-${indexContainer}`,
                            isSelected: false,
                            isDisabled: false
                        }
                    })


                    return {
                        ...room,
                        lessons: newLessons

                    }
                })

                state.hours = action.payload.hours_list
                state.loading = false
                state.error = null
            })
            .addCase(fetchTimeTableData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
})

export default TimeTableTuronSlice.reducer
export const {onChangeTypeTimeTable,onChangeDayTimeTable,onChangeColorTimeTable} = TimeTableTuronSlice.actions
