import {createSlice} from "@reduxjs/toolkit";
import {fetchFilteredRooms} from "./filterRoomsThunk"

const initialState = {
    rooms: null,
    loading: false,
    error: null
}

export const filterRoomsSlices = createSlice({
    name: "filterRooms",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchFilteredRooms.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchFilteredRooms.fulfilled, (state, action) => {
                state.rooms = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchFilteredRooms.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
})

export default filterRoomsSlices.reducer