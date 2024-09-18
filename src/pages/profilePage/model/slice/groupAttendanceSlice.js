import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: false,
    attendance: [
        {name: "Sardor", surname: "ikromov", id: 1},
        {name: "Sardor", surname: "ikromov", id: 2},
        {name: "Sardor", surname: "ikromov", id: 3}
    ],
    attended: [
        {name: "Sardor", surname: "ikromov", id: 1 , status: true},
        {name: "Sardor", surname: "ikromov", id: 2 , status: false},
        {name: "Sardor", surname: "ikromov", id: 2 , status: false},
        {name: "Sardor", surname: "ikromov", id: 2 , status: false},
        {name: "Sardor", surname: "ikromov", id: 3 , status: true},
        {name: "Sardor", surname: "ikromov", id: 3 , status: true},
        {name: "Sardor", surname: "ikromov", id: 3 , status: true},
    ]
}

const groupAttendance = createSlice({
    name: "groupAttendance",
    initialState,
    reducers: {
        onChecked: (state, action) => {
            state.attendance = state.attendance.filter(item => item.id !== action.payload.id)
        }
    },
    extraReducers: builder => {}
})

export const {onChecked} = groupAttendance.actions
export default groupAttendance.reducer

