import {createSlice} from "@reduxjs/toolkit";
import {fetchVacancyWorkerListThunk} from "./vacancyWorkerListThunk";

const initalState = {
    workerData: [],
    loading: false,
    error: null
}

export const vacancyWorkerListSlice = createSlice({
    name: "vacancyWorkerListSlice",
    initalState,
    reducers: {},
    extraReducers: builder =>
    {
        builder
            .addCase(fetchVacancyWorkerListThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchVacancyWorkerListThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.workerData = action.payload
                console.log(action.payload, "workerList")
            })
            .addCase(fetchVacancyWorkerListThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
})

export default vacancyWorkerListSlice.reducer