import {createSlice} from "@reduxjs/toolkit";
import {getLocationThunk} from "../thunk/locationSlice";


const initialState = {
    name: [],
    loading: false,
    error: false
}

const getLocationSlice = createSlice({
    name: "getLocationSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getLocationThunk.pending , state => {
                state.loading = true
                state.error = false
            })
            .addCase(getLocationThunk.fulfilled , (state, action) => {
                state.name = action.payload.locations
                state.loading = false
                state.error = false
            })
            .addCase(getLocationThunk.rejected , (state, action) => {
                state.loading = false
                state.error = true
            })
})

export default getLocationSlice.reducer