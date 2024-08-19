import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    studentsData: [
        {name: "sardor", surname: "ikromov" , payment: "2023" , date: "2322.22.22" , typePayment: "cash" , delete: true},
        {name: "sardor2", surname: "ikromov2" , payment: "2023" , date: "2322.22.22" , typePayment: "card" , delete: false},
        {name: "sardor2", surname: "ikromov2" , payment: "2023" , date: "2322.22.22" , typePayment: "card" , delete: false},
    ],
    loading: false,
    error: false
}
const studentSlice = createSlice({
    name: "studentSlice",
    initialState,
    reducers:{},
    extraReducers: builder => {}
})

export default studentSlice.reducer