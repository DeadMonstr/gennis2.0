import {createSlice} from "@reduxjs/toolkit";
import {fetchInsideRoom} from "./roomThunk";

const initialState = {
    insideRoom: []
}
export const roomssSlice = createSlice({
    name: "roomssSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchInsideRoom.pending,state => {state.fetchRoomsStatus = 'loading'} )
            .addCase(fetchInsideRoom.fulfilled,(state, action) => {
                state.fetchRoomsStatus = 'success';
                state.insideRoom = action.payload
                console.log(action.payload, "vot eta ")
            })
            .addCase(fetchInsideRoom.rejected,state => {state.fetchRoomsStatus = 'error'})
    }
})

export default  roomssSlice.reducer