import {createSlice} from "@reduxjs/toolkit";
import {getBranchThunk} from "../thunk/branchThunk";


const initialState = {
    name: [],
    loading: false,
    error: false
}

const getBranchSlice = createSlice({
    name: "getBranchSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getBranchThunk.pending , state => {
                state.loading = true
                state.error = false
            })
            .addCase(getBranchThunk.fulfilled , (state, action) => {
                state.name = action.payload.systems
                state.loading = false
                state.error = false
            })
            .addCase(getBranchThunk.rejected , (state, action) => {
                state.loading = false
                state.error = true
            })
})

export default getBranchSlice.reducer