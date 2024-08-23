import {createSlice} from "@reduxjs/toolkit";
import {fetchGroupProfile} from "./groupProfileThunk";

const initialState = {
    data: null,
    loading: false,
    error: null
}

const groupProfileSlice = createSlice({
    name: "groupProfileSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchGroupProfile.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchGroupProfile.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchGroupProfile.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
})

export default groupProfileSlice.reducer
