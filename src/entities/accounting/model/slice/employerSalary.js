import {createSlice} from "@reduxjs/toolkit";
import {getEmpSalary , getDeletedEmpSalary} from "../thunk/employerSalary";

const initialState = {
    loading: false,
    error: null,
    employerSalary: [],
    deletedEmployerSalary: []
}

const employerSlice = createSlice({
    name: "employerSlice",
    initialState,
    reducers : {
        onDeleteEmployerSalary: (state, action) => {
            state.employerSalary = state.employerSalary.filter(item => item.id !== action.payload.id)
        },
        changePaymentType: (state, action) => {
            state.employerSalary = state.employerSalary.filter(item => item.id !== action.payload.id)
        },

    },
    extraReducers: builder =>
        builder
            .addCase(getEmpSalary.pending , state => {
                state.loading = true
                state.error = false
            })
            .addCase(getEmpSalary.fulfilled , (state, action) => {
                state.employerSalary = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(getEmpSalary.rejected , (state , action) => {
                state.loading = false
                state.error = true
            })
            .addCase(getDeletedEmpSalary.pending , state => {
                state.loading = true
                state.error = false
            })
            .addCase(getDeletedEmpSalary.fulfilled , (state, action) => {
                state.deletedEmployerSalary = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(getDeletedEmpSalary.rejected , state => {
                state.error = true
                state.loading = false
            })

})

export const {onDeleteEmployerSalary, changePaymentType} = employerSlice.actions
export default  employerSlice.reducer