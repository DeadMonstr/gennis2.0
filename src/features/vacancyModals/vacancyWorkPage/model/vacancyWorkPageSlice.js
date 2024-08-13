import {createSlice} from "@reduxjs/toolkit";
import {fetchWorkerWithId} from "./vacancyWorkPageThunk";

const initialState = {
    workerPermission: [],
    loading: false,
    error: null
};


export const vacancyWorkPageSlice = createSlice({
    name: "vacancyWorkPageSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWorkerWithId.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchWorkerWithId.fulfilled, (state, action) => {
                state.loading = false;
                state.workerPermission = action.payload
                console.log(action.payload, "user id")
            })
            .addCase(fetchWorkerWithId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
})

export default vacancyWorkPageSlice.reducer