import {createSlice} from "@reduxjs/toolkit";
import {fetchFilteredEmployees} from "./filterEmployeesThunk"

const initialState = {
    employees: null,
    loading: false,
    error: null
}

export const filterEmployeesSlices = createSlice({
    name: "filterEmployees",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchFilteredEmployees.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchFilteredEmployees.fulfilled, (state, action) => {
                state.employees = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchFilteredEmployees.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
})

export default filterEmployeesSlices.reducer