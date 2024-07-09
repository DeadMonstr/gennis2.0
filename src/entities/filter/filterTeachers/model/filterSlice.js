import {createSlice} from "@reduxjs/toolkit";
import {fetchTeachersFilter} from "./filterThunk";

const initialState = {
    filtered: null,
    loading: false,
    error: null
}

export const filterTeacherSlice = createSlice({
    name: "filterTeacher",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchTeachersFilter.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTeachersFilter.fulfilled, (state, action) => {
                state.filtered = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchTeachersFilter.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
})

export default filterTeacherSlice.reducer