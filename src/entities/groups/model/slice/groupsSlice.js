
import {createSlice} from "@reduxjs/toolkit";
import {fetchGroupsData} from "./groupsThunk";

const initialState = {
    data: [],
    loading: true,
    error: null
}

export const groupsSlice = createSlice({
    name: "groupsSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchGroupsData.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchGroupsData.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchGroupsData.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
})

export default groupsSlice.reducer
