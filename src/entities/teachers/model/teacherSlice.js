import {createSlice} from "@reduxjs/toolkit";
import {fetchTeachersData} from "./teacherThunk";



const initialState = {
    teachersData: [],
    teacherStatus: "idle",
    deletedTeachers: [],
    loading: false
}

export const teachersSlice = createSlice({
    name: "teachersSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTeachersData.pending , state =>{
                state.loading = true
            })
            .addCase(fetchTeachersData.fulfilled , (state , action) =>{
                state.teachersData = action.payload
                console.log(action.payload , "teacher")
                state.loading = false
            })
            .addCase(fetchTeachersData.rejected , (state , action) =>{
                state.teachers = "error"
            })
    }
})


export default teachersSlice.reducer