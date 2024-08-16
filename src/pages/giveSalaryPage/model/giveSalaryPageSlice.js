import {createSlice} from "@reduxjs/toolkit";
import {fetchEmployerSalaryThunk} from "./giveSalaryPageThunk";

const initialState = {
    salaryInsideData: [],
    loading: false,
    error: null
}

export const giveEmployerSalarySlice = createSlice({
    name: "giveEmployerSalarySlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchEmployerSalaryThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchEmployerSalaryThunk.fulfilled, (state, action) => {
                state.loading = false
                state.salaryInsideData = action.payload
                console.log(action.payload, "giveSalary")
            })
            .addCase(fetchEmployerSalaryThunk.rejected, (state, action) =>{
                state.error = action.error.message
            })
    }
})

export default giveEmployerSalarySlice.reducer