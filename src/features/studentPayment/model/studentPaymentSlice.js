import {createSlice} from "@reduxjs/toolkit";
import {studentPaymentThunk} from "./studentPaymentThunk";


const initialState = {
    payment: [],
    loading: false,
    error: null
}

const studentPaymentSlice = createSlice({
    name: "studentPaymentSlice",
    initialState,
    reducers: {
        addPayment: (state, action) => {
            console.log("To'landi", action.payload);
            state.payment.push(action.payload);
            console.log("Update payment", state.payment)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(studentPaymentThunk.pending, (state) => state.loading = true)
            .addCase(studentPaymentThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.payment = action.payload
            })
            .addCase(studentPaymentThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
})
export const {addPayment} = studentPaymentSlice.actions
export default studentPaymentSlice.reducer