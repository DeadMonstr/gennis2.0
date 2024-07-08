import {createSlice} from "@reduxjs/toolkit";
import {fetchSearch} from "./searchThunk";

const initialState = {
    newStudents: null,
    loading: false,
    error: null
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchSearch.pending, state => {state.loading = true})
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.newStudents = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(fetchSearch.rejected, state => {
                state.loading = false
                state.error = true
            })
    }
})

export default searchSlice.reducer