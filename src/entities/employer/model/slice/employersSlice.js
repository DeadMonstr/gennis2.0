import {createSlice} from "@reduxjs/toolkit";
import {fetchEmployersData, fetchEmployersDataWithFilter} from "./employersThunk";

const initialState = {
    employersData: [],
    deletedEmployers: [],
    employerDataWithFilter: [],
    loading: false,
    error: null
}

export const employersSlice = createSlice({
    name: 'employersSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchEmployersData.pending, (state) => {state.loading = true})
            .addCase(fetchEmployersData.fulfilled, (state, action) => {
                state.loading = false
                state.employersData = action.payload
            })
            .addCase(fetchEmployersData.rejected, (state) => {
                state.error = 'error'
            })



            .addCase(fetchEmployersDataWithFilter.pending, (state) => {state.loading = true})
            .addCase(fetchEmployersDataWithFilter.fulfilled, (state, action) => {
                state.loading = false
                state.employerDataWithFilter = action.payload
            })
            .addCase(fetchEmployersDataWithFilter.rejected, (state) => {
                state.error = 'error'
            })


})
export default employersSlice.reducer