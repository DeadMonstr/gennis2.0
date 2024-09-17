import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error: false,
    days: [],
    months: [],
    students: [
        {
            groupName : "1-blue",
            accounting: [
                {name: "sardor" , surname: "ikromov" , number: "9912321" , allDebt: 1232 , debt: 12 , payment: "cash"},
                {name: "43243" , surname: "ikromov" , number: "9912321" , allDebt: 1232 , debt: 12 , payment: "payment"},
                {name: "43243" , surname: "ikromov" , number: "9912321" , allDebt: 1232 , debt: 12 , payment: "payment"},
                {name: "43243" , surname: "ikromov" , number: "9912321" , allDebt: 1232 , debt: 12 , payment: "payment"},
                {name: "43243" , surname: "ikromov" , number: "9912321" , allDebt: 1232 , debt: 12 , payment: "payment"},
                {name: "43243" , surname: "ikromov" , number: "9912321" , allDebt: 1232 , debt: 12 , payment: "payment"},
                {name: "43243" , surname: "ikromov" , number: "9912321" , allDebt: 1232 , debt: 12 , payment: "payment"},
            ]
        },
        {
            groupName : "2-blue",
            accounting: [
                {name: "sardor" , surname: "ikromov" , number: "9912321" , allDebt: 1232 , debt: 12 , payment: "cash"},
                {name: "sardor" , surname: "ikromov" , number: "9912321" , allDebt: 1232 , debt: 12 , payment: "payment"},
                {name: "sardor" , surname: "ikromov" , number: "9912321" , allDebt: 1232 , debt: 12 , payment: "payment"},
                {name: "sardor" , surname: "ikromov" , number: "9912321" , allDebt: 1232 , debt: 12 , payment: "payment"},
                {name: "sardor" , surname: "ikromov" , number: "9912321" , allDebt: 1232 , debt: 12 , payment: "payment"},
                {name: "sardor" , surname: "ikromov" , number: "9912321" , allDebt: 1232 , debt: 12 , payment: "payment"},
                {name: "sardor" , surname: "ikromov" , number: "9912321" , allDebt: 1232 , debt: 12 , payment: "payment"},
            ]
        }
    ],

}


const accountingOtchotSlice = createSlice({
    name: "otchotSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {}
})

export default accountingOtchotSlice.reducer