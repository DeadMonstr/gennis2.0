import {createSlice} from "@reduxjs/toolkit";
import {fetchFilteredGroups} from "./filterGroupsThunk"

const initialState = {
    groups: null,
    loading: false,
    error: null
}

export const filterGroupsSlices = createSlice({
    name: "filterGroups",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchFilteredGroups.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchFilteredGroups.fulfilled, (state, action) => {
                state.groups = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchFilteredGroups.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
})

export default filterGroupsSlices.reducer