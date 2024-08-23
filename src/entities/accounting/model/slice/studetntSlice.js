import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    studentsData: [
        {name: "sardor", surname: "ikromov", payment: "2023", date: "2322.22.22", typePayment: "cash", delete: true , id: 1},
        {name: "sardor2", surname: "ikromov2", payment: "2023", date: "2322.22.22", typePayment: "card", delete: false, id: 2},
        {name: "sardor2", surname: "ikromov2", payment: "2023", date: "2322.22.22", typePayment: "card", delete: false , id: 3},
    ],
    loading: false,
    error: false
}
const studentSlice = createSlice({
    name: "studentSlice",
    initialState,
    reducers: {
        onDeleteStudents: (state, action) => {
            state.studentsData = state.studentsData.filter(item => item.id !== action.payload.id)
        },
    },
    extraReducers: builder => {
    }
})

export const {onDeleteStudents} = studentSlice.actions

export default studentSlice.reducer