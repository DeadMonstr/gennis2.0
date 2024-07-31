import {createSlice} from "@reduxjs/toolkit";
import {fetchFlows} from "./flowsThunk";


const initialState = {
    flows: [],
    flowsStatus: "idle"
}


export const flowsSlice = createSlice({
    name: "flowsSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchFlows.pending, state => {
                state.flowsStatus = "loading"
            })
            .addCase(fetchFlows.fulfilled, (state, action) => {
                state.flows = action.payload.results
                console.log(action.payload, "fdlow")
            })
            .addCase(fetchFlows.rejected, (state, action) => {
                state.flows = "error"
            })
    }
})
export default flowsSlice.reducer