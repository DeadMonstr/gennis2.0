import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            id: 1,
            timeList: "1-dars",
            startTime: "15:00",
            finishTime: "17:00",
            name: "Ingliz tili"
        },
        {
            id: 2,
            timeList: "1-dars",
            startTime: "15:00",
            finishTime: "17:00",
            name: "Ingliz tili"
        },
        {
            id: 3,
            timeList: "1-dars",
            startTime: "15:00",
            finishTime: "17:00",
            name: "Ingliz tili"
        },
        {
            id: 4,
            timeList: "1-dars",
            startTime: "15:00",
            finishTime: "17:00",
            name: "Ingliz tili"
        },
        {
            id: 5,
            timeList: "1-dars",
            startTime: "15:00",
            finishTime: "17:00",
            name: "Ingliz tili"
        },
        {
            id: 6,
            timeList: "1-dars",
            startTime: "15:00",
            finishTime: "17:00",
            name: "Ingliz tili"
        },
        {
            id: 7,
            timeList: "1-dars",
            startTime: "15:00",
            finishTime: "17:00",
            name: "Ingliz tili"
        },
        {
            id: 8,
            timeList: "1-dars",
            startTime: "15:00",
            finishTime: "17:00",
            name: "Ingliz tili"
        },
        {
            id: 9,
            timeList: "1-dars",
            startTime: "15:00",
            finishTime: "17:00",
            name: "Ingliz tili"
        },
        {
            id: 10,
            timeList: "1-dars",
            startTime: "15:00",
            finishTime: "17:00",
            name: "Ingliz tili"
        },
        {
            id: 11,
            timeList: "1-dars",
            startTime: "15:00",
            finishTime: "17:00",
            name: "Ingliz tili"
        },
        {
            id: 12,
            timeList: "1-dars",
            startTime: "15:00",
            finishTime: "17:00",
            name: "Ingliz tili"
        },
        {
            id: 13,
            timeList: "1-dars",
            startTime: "15:00",
            finishTime: "17:00",
            name: "Ingliz tili"
        }
    ],
    loading: false,
    error: null
}

const TimeTableSlice = createSlice({
    name: "timeTable",
    initialState,
    reducers: {
        changeTime: (state, action) => {
            state.data = [
                ...state.data.filter(item => item.id !== action.payload.id),
                action.payload
            ]
            state.loading = false
            state.error = null
        }
    }
})

export default TimeTableSlice.reducer
export const {changeTime} = TimeTableSlice.actions
