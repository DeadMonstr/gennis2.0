import {createSlice} from "@reduxjs/toolkit";
import {fetchFilteredListData} from "entities/filteredLeadsList/model/filteredLeadsListThunk";

const initialState = {
    data: [],

    loading: false,
    error: null
}

export const filteredLeadsListSlice = createSlice({
    name: 'filteredLeadsListSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchFilteredListData.pending, (state) => {state.loading = true})
            .addCase(fetchFilteredListData.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchFilteredListData.rejected, (state) => {
                state.loading = false;
                state.error = 'error';
            })




    }
})

export const {} = filteredLeadsListSlice.actions

export default filteredLeadsListSlice.reducer