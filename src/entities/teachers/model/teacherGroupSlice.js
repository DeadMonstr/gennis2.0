import {createSlice} from "@reduxjs/toolkit";
import {teacherGroupThunk} from "./teacherGroupThunk";


const initialState = {
    teacherGroup: [],
    loading: false,
    error: null
}

const teacherGroupSlice = createSlice({
    name: "teacherGroupSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(teacherGroupThunk.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(teacherGroupThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.teacherGroup = action.payload
                state.error = null
            })
            .addCase(teacherGroupThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
})

export default teacherGroupSlice.reducer