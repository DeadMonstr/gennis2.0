import {createSlice} from "@reduxjs/toolkit";
import {fetchTeachersData} from "./teacherThunk";



const initialState = {
    teachersData: [],
    teacherStatus: "idle",
    deletedTeachers: []
}

export const teachersSlice = createSlice({
    name: "teachersSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTeachersData.pending , state =>{
                state.teacherStatus ="loading"
            })
            .addCase(fetchTeachersData.fulfilled , (state , action) =>{
                state.teachersData = action.payload.results
                console.log(action.payload , "teacher")
                state.teacherStatus = "success"
            })
            .addCase(fetchTeachersData.rejected , (state , action) =>{
                state.teachers = "error"
            })
    }
})


export default teachersSlice.reducer