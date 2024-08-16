import {createSlice} from "@reduxjs/toolkit";
import {fetchEmployersData} from "./employersThunk";

const initialState = {
    employersData: [],
    deletedEmployers: [],
    loading: false,
    error: null
}

export const employersSlice = createSlice({
    name: 'employersSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchEmployersData.pending, (state) => {state.loading = true})
            .addCase(fetchEmployersData.fulfilled, (state, action) => {
                state.loading = false
                state.employersData = action.payload
                console.log(action.payload, "employeers")
            })
            .addCase(fetchEmployersData.rejected, (state) => state.employersData = 'error')
    }
})
export default employersSlice.reducer