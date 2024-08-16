import {createSlice} from "@reduxjs/toolkit";
import {createLocationThunk} from "../createThunk/locationThunk"

const initialState = {
    name: null,
    system: null,
    loading: false,
    error: false
}

const postCreateLocation = createSlice({
    name: "postCreateLocation",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(createLocationThunk.pending , state => {
                state.loading = true
                state.error = false
            })
            .addCase(createLocationThunk.fulfilled , (state, action) => {
                state.system = action.payload
                state.name = action.payload
                state.loading = false
                state.error = false
                console.log(action.payload , "yedi")
            })
            .addCase(createLocationThunk.rejected , (state , action) => {
                state.error = true
                state.loading = false
            })
})

export default postCreateLocation.reducer