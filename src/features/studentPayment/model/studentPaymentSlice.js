import {createSlice} from "@reduxjs/toolkit";
import {
    studentPaymentThunk,
    studentCharityThunk,
    studentGroupHistoryThunk,
    studentTotalAddendanceThunk
} from "./studentPaymentThunk";


const initialState = {
    payment: [],
    charities: [],
    groupHistory: [],
    attendance: [],
    loading: false,
    error: null
}

const studentPaymentSlice = createSlice({
    name: "studentPaymentSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
           .addCase(studentPaymentThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentPaymentThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.payment = action.payload
            })
            .addCase(studentPaymentThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })


            .addCase(studentCharityThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentCharityThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.charities = action.payload
            })
            .addCase(studentCharityThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })


            .addCase(studentGroupHistoryThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentGroupHistoryThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.groupHistory = action.payload
            })
            .addCase(studentGroupHistoryThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })



            .addCase(studentTotalAddendanceThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentTotalAddendanceThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.attendance = action.payload
            })
            .addCase(studentTotalAddendanceThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
});

export default studentPaymentSlice.reducer
