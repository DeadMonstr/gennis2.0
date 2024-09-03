import {createSlice} from "@reduxjs/toolkit";
import {
    studentPaymentThunk,
    studentCharityThunk,
    studentDiscountThunk,
    studentGroupHistoryThunk,
    studentTotalAddendanceThunk,
    studentProfileTotalAmountThunk,
    studentProfileAttendanceDataThunk,
    studentProfileAttendanceDataPostThunk,
    studentProfileAttendanceAll,
    studentProfileAttendanceAllDataThunk,
    studentProfileAttendanceAllDataPostThunk,
    studentPaymentListThunk,
    studentContractThunk,
    studentContractUploadThunk,
    studentPaymenListDelete,
    studentPaymentListDeleteGetThunk,
    studentPaymentDataThunk,
    studentPaymentDataPostThunk,
    studentPaymentTypeChangeThunk,
    studentBookOrderListThunk,
    getMonthDataThunk

} from "./studentPaymentThunk";


const initialState = {
    payment: [],
    charities: [],
    discount: [],
    groupHistory: [],
    attendance: [],
    totalAmount: [],
    attendanceData: [],
    attendanceDatas: [],
    attendanceAllData: [],
    allAttendance: [],
    allAttendanceDatas: [],
    paymentList: [],
    contract: [],
    contractFile: [],
    deleteList: [],
    getDeletedList: [],
    getPaymentDates: [],
    getDateWithPost: [],
    paymentType: [],
    booksList: [],
    getMonthData: [],
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



            .addCase(studentDiscountThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentDiscountThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.discount = action.payload
            })
            .addCase(studentDiscountThunk.rejected, (state, action) => {
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



            .addCase(studentProfileTotalAmountThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentProfileTotalAmountThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.totalAmount = action.payload
            })
            .addCase(studentProfileTotalAmountThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })



            .addCase(studentProfileAttendanceDataThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentProfileAttendanceDataThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.attendanceData = action.payload
            })
            .addCase(studentProfileAttendanceDataThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })



            .addCase(studentProfileAttendanceDataPostThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentProfileAttendanceDataPostThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.attendanceDatas = action.payload
            })
            .addCase(studentProfileAttendanceDataPostThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })



            .addCase(studentProfileAttendanceAll.pending, (state) => {
               state.loading = true
           })
            .addCase(studentProfileAttendanceAll.fulfilled, (state, action) => {
                state.loading = false;
                state.allAttendance = action.payload
            })
            .addCase(studentProfileAttendanceAll.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })



            .addCase(studentProfileAttendanceAllDataThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentProfileAttendanceAllDataThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.attendanceAllData = action.payload
            })
            .addCase(studentProfileAttendanceAllDataThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })



            .addCase(studentProfileAttendanceAllDataPostThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentProfileAttendanceAllDataPostThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.allAttendanceDatas = action.payload
            })
            .addCase(studentProfileAttendanceAllDataPostThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })



            .addCase(studentPaymentListThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentPaymentListThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.paymentList = action.payload
            })
            .addCase(studentPaymentListThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })



            .addCase(studentContractThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentContractThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.contract = action.payload;
            })
            .addCase(studentContractThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })



            .addCase(studentContractUploadThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentContractUploadThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.contractFile = action.payload;
            })
            .addCase(studentContractUploadThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })



            .addCase(studentPaymenListDelete.pending, (state) => {
               state.loading = true
           })
            .addCase(studentPaymenListDelete.fulfilled, (state, action) => {
                state.loading = false;
                state.deleteList = action.payload;
            })
            .addCase(studentPaymenListDelete.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })



            .addCase(studentPaymentListDeleteGetThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentPaymentListDeleteGetThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.getDeletedList = action.payload;
            })
            .addCase(studentPaymentListDeleteGetThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })



            .addCase(studentPaymentDataThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentPaymentDataThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.getPaymentDates = action.payload;
            })
            .addCase(studentPaymentDataThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })



            .addCase(studentPaymentDataPostThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentPaymentDataPostThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.getDateWithPost = action.payload;
            })
            .addCase(studentPaymentDataPostThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })



            .addCase(studentPaymentTypeChangeThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentPaymentTypeChangeThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.paymentType = action.payload;
            })
            .addCase(studentPaymentTypeChangeThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })



            .addCase(studentBookOrderListThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(studentBookOrderListThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.booksList = action.payload;
            })
            .addCase(studentBookOrderListThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })



            .addCase(getMonthDataThunk.pending, (state) => {
               state.loading = true
           })
            .addCase(getMonthDataThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.getMonthData = action.payload;
            })
            .addCase(getMonthDataThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default studentPaymentSlice.reducer
