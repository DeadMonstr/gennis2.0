import {createSlice} from "@reduxjs/toolkit";
import {getMonthDay, getOverheadType, overHeadDeletedList, overHeadList} from "../thunk/additionalCosts";

const initialState = {
    overHeadList: [],
    overHeadDeletedLists: [],
    overHeadType: [],
    loading: false,
    error: false,
    monthDay: []
}

export const overHeadSlice = createSlice({
    name: "overHeadSlice",
    initialState,
    reducers: {
        onDeleteOverhead: (state, action) => {
            state.overHeadList = state.overHeadList.filter(item => item.id !== action.payload.id)
        },
    },
    extraReducers: builder =>
        builder
            .addCase(overHeadList.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(overHeadList.fulfilled, (state, action) => {
                state.overHeadList = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(overHeadList.rejected, state => {
                state.loading = false
                state.error = false
            })
            .addCase(overHeadDeletedList.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(overHeadDeletedList.fulfilled, (state, action) => {
                state.overHeadDeletedLists = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(overHeadDeletedList.rejected, state => {
                state.loading = false
                state.error = false
            })
            .addCase(getOverheadType.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(getOverheadType.fulfilled, (state, action) => {
                state.overHeadType = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(getOverheadType.rejected, state => {
                state.loading = false
                state.error = false
            })
            .addCase(getMonthDay.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(getMonthDay.fulfilled, (state, action) => {
                state.monthDay = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(getMonthDay.rejected, state => {
                state.loading = false
                state.error = false
            })
})

export const {onDeleteOverhead} = overHeadSlice.actions
export default overHeadSlice.reducer