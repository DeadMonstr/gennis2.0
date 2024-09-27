import {createSlice} from "@reduxjs/toolkit";
import {getAttendanceThunk} from "../../../../entities/groups/model/slice/groupsAttendanceThunk";

const initialState = {
    loading: false,
    error: false,
    attendance: []
}

const groupAttendance = createSlice({
    name: "groupAttendance",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAttendanceThunk.pending , state => {
                state.loading = true
                state.error = false
            })
            .addCase(getAttendanceThunk.fulfilled , (state, action) => {
                state.attendance = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(getAttendanceThunk.rejected , state => {
                state.error = true
                state.loading  =false
            })
})

export default groupAttendance.reducer

