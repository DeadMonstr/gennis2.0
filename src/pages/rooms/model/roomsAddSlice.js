import {createSlice} from "@reduxjs/toolkit";
import {roomsAddThunk} from "./roomsAddThunk";

export const roomsAddSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(roomsAddThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(roomsAddThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.rooms.push(action.payload);
            })
            .addCase(roomsAddThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default roomsAddSlice.reducer;