import {createSlice} from "@reduxjs/toolkit";

import {fetchNewStudentsData} from "./newStudentsThunk";


const initialState = {
    newStudents: [],
    newStudentsStatus: "idle",
    deletedStudents: [],
    studyingStudents: []
}

export const newStudentsSlice = createSlice({
    name: "newStudentsSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchNewStudentsData.pending , state => {
                state.newStudentsStatus = "loading"
            })
            .addCase(fetchNewStudentsData.fulfilled , (state , action) =>{
                state.newStudents = action.payload.new_students
                state.studyingStudents = action.payload.active
                console.log(action.payload , "new")
                state.newStudentsStatus = "success"
            })
            .addCase(fetchNewStudentsData.rejected , (state , action) =>{
                state.newStudents = "error"
            })
})

export default newStudentsSlice.reducer
