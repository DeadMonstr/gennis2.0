import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    employersData: [
        {name: "sardor", surname: "ikromov", age: 17, phone: 12342131, work: "Manager", status: true, id:1},
        {name: "sardor", surname: "ikromov", age: 17, phone: 12342131, work: "Manager", status: true, id:2},
        {name: "sardor", surname: "ikromov", age: 17, phone: 12342131, work: "Manager", status: true, id:3},
        {name: "sardor", surname: "ikromov", age: 17, phone: 12342131, work: "Manager", status: false, id:3},

    ],
    deletedEmployers: [
        {name: "sardor", surname: "ikromov", age: 17, phone: 12342131, work: "Manager", deleteData: "12312321"}
    ]
}

export const employersSlice = createSlice({
    name: 'employersSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {}
})
export default employersSlice.reducer