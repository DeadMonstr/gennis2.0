import {createSlice} from "@reduxjs/toolkit";
import {createBranchThunk} from "../createThunk/createBranchThunk"

const initialState = {
    name: null,
    system: null,
    loading: false,
    error: false
}

const postCreateBranch = createSlice({
    name: "postCreateBranch",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(createBranchThunk.pending , state => {
                state.loading = true
                state.error = false
            })
            .addCase(createBranchThunk.fulfilled , (state, action) => {
                state.system = action.payload
                state.name = action.payload
                state.loading = false
                state.error = false
                console.log(action.payload , "yedi")
            })
            .addCase(createBranchThunk.rejected , (state , action) => {
                state.error = true
                state.loading = false
            })
})

export default postCreateBranch.reducer