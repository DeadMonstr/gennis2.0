import {createSlice} from "@reduxjs/toolkit";
import {fetchTeachersData, fetchTeachersDataWithFilter} from "./teacherThunk";



const initialState = {
    teachersData: [],
    teacherStatus: "idle",
    deletedTeachers: [],
    teachersDataWithFilter: [],
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
                state.loading = false
            })
            .addCase(fetchTeachersData.rejected , (state , action) =>{
                state.error = "error"
            })



            .addCase(fetchTeachersDataWithFilter.pending , state =>{
                state.loading = true
            })
            .addCase(fetchTeachersDataWithFilter.fulfilled , (state , action) =>{
                state.teachersDataWithFilter = action.payload
                state.loading = false
            })
            .addCase(fetchTeachersDataWithFilter.rejected , (state , action) =>{
                state.error = "error"
            })
    }
})


export default teachersSlice.reducer