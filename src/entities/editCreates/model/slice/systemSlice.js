import {createSlice} from "@reduxjs/toolkit";
import {getSystemThunk} from "../thunk/systemThunk";


const initialState = {
    name: [],
    loading: false,
    error: false
}

const getSystemSlice = createSlice({
    name: "getSystemSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getSystemThunk.pending , state => {
                state.loading = true
                state.error = false
            })
            .addCase(getSystemThunk.fulfilled , (state, action) => {
                state.name = action.payload.systems
                state.loading = false
                state.error = false
            })
            .addCase(getSystemThunk.rejected , (state, action) => {
                state.loading = false
                state.error = true
            })
})

export default getSystemSlice.reducer