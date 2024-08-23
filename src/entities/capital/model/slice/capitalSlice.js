import {createSlice} from "@reduxjs/toolkit";
import {
    getCapitalDataThunk,
    createCapitalCategory,
    getCapitalInfo,
    changeCapitalInfoThunk,
    createInsideCategory, getInsideCategory,
    getPaymentType
} from "../thunk/capitalThunk";



const initialState = {
    loading: false,
    error: null,
    capitalsData: [],
    capitalPermission: [],
    capitalCategoryInfo: [],
    capitalInsideCategory: [],
    paymentTypes: []

}

export const CapitalSlice = createSlice({
    name: "capitalSlice",
    initialState,
    reducers: {
        onDeleteBranch: (state, action) => {
            const id = action.payload.id;
            state.capitalCategoryInfo = action.payload
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getCapitalDataThunk.pending , state => {
                state.loading = true
                state.error = null
            })
            .addCase(getCapitalDataThunk.fulfilled , (state, action) => {
                state.loading = false
                state.capitalsData = action.payload?.capitalcategorys
                state.capitalPermission = action.payload?.permissions
                console.log(action.payload , "capital")
            })
            .addCase(getCapitalDataThunk.rejected , (state, action) => {
                state.error = action.payload ?? null
            })
            .addCase(createCapitalCategory.pending , state => {
                state.loading= true
                state.error = null
            })
            .addCase(createCapitalCategory.fulfilled , (state  ,action) => {
                state.loading = false
                state.capitalsData = [...state.capitalsData , action.payload]
                state.error = null
            })
            .addCase(createCapitalCategory.rejected, (state, action) =>{
                state.error = "Error"
                state.loading = false
            })
            .addCase(getCapitalInfo.pending , state => {
                state.loading = true
                state.error = null
            })
            .addCase(getCapitalInfo.fulfilled , (state, action) =>{
                state.capitalCategoryInfo = action.payload.capitalcategory
                console.log(action.payload , "capital info")
                state.loading = false
                state.error = null
            })
            .addCase(getCapitalInfo.rejected , (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
            .addCase(changeCapitalInfoThunk.pending , state => {
                state.loading = true
                state.error = null
            })
            .addCase(changeCapitalInfoThunk.fulfilled , (state, action) =>{
                state.capitalCategoryInfo = action.payload

                console.log(action.payload , "capital info")
                state.loading = false
                state.error = null
            })
            .addCase(changeCapitalInfoThunk.rejected , (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
            .addCase(createInsideCategory.pending , state => {
                state.loading= true
                state.error = null
            })
            .addCase(createInsideCategory.fulfilled , (state  ,action) => {
                state.loading = false
                state.capitalInsideCategory = action.payload
                state.error = null
            })
            .addCase(createInsideCategory.rejected, (state, action) =>{
                state.error = action.payload ?? null
                state.loading = false
            })
            .addCase(getInsideCategory.pending , state => {
                state.loading = true
                state.error = null
            })
            .addCase(getInsideCategory.fulfilled , (state, action) =>{
                state.capitalInsideCategory = action.payload.capitals
                console.log(action.payload , "capital inside info")
                state.loading = false
                state.error = null
            })
            .addCase(getInsideCategory.rejected , (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
            .addCase(getPaymentType.pending , state => {
                state.loading = true
                state.error = false
            })
            .addCase(getPaymentType.fulfilled , (state , action) => {
                state.paymentTypes = action.payload.paymenttypes
                state.loading = false
                state.error = false
                console.log(action.payload , "action")
            })
            .addCase(getPaymentType.rejected , (state , action) => {
                state.loading = false
                state.loading = true
            })
})

export const {onDeleteBranch}  =CapitalSlice.actions

export default CapitalSlice.reducer