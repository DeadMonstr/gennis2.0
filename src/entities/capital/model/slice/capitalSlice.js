import {createSlice} from "@reduxjs/toolkit";
import {getCapitalDataThunk,createCapitalCategory ,getCapitalInfo , changeCapitalInfoThunk} from "../thunk/capitalThunk";



const initialState = {
    loading: false,
    error: null,
    capitalsData: [],
    capitalPermission: [],
    capitalCategoryInfo: [],

}

export const CapitalSlice = createSlice({
    name: "capitalSlice",
    initialState,
    reducers: {},
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
                state.capitalsData = [...state.capitalsData , action.payload?.capitalcategorys]
                state.error = null
            })
            .addCase(createCapitalCategory.rejected, (state, action) =>{
                state.error = action.payload ?? null
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
                state.capitalCategoryInfo =
                  [...state.capitalCategoryInfo.filter(item => item.id !== action.payload.id),
                    action.payload
                ]
                console.log(action.payload , "capital info")
                state.loading = false
                state.error = null
            })
            .addCase(changeCapitalInfoThunk.rejected , (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })
})



export default CapitalSlice.reducer