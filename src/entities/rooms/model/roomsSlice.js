import {createSlice} from "@reduxjs/toolkit";

import {fetchRoomsData} from "./roomsThunk";

const initialState = {
    roomsData: [],
    roomsStatus: "idle",
    error: null,
    loading: false
}

export const roomsSlice = createSlice(
    {
        name: "roomsSlice",
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(fetchRoomsData.pending, state => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchRoomsData.fulfilled,( state, action )=> {
                    state.loading = false;
                    state.roomsData = action.payload
                    console.log(action.payload, "keldim")
                    state.roomsStatus = 'success'


                })
                .addCase(fetchRoomsData.rejected, state => {
                    state.error = "error"
                })
    }
)

export default roomsSlice.reducer