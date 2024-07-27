import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: null,
    loading: false,
    error: null
}

const StudentProfileSlice = createSlice({
    name: "studentProfile",
    initialState,
    reducers: {}
})

export default StudentProfileSlice.reducer
