import {createSlice} from "@reduxjs/toolkit";
import {fetchPermissionTable} from "./vacancyWorkerPermissionThunk";


const initialState = {
    tables: [],
    loading: false,
    error: null
}

export const vacancyWorkerPermissionSlice = createSlice({
    name: "vacancyWorkerPermissionSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPermissionTable.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPermissionTable.fulfilled, (state, action ) => {
                state.loading = false
                state.tables = action.payload
                console.log(action.payload, "tables")

            })
            .addCase(fetchPermissionTable.rejected, (state,action) => {
                state.loading = false;
                state.error = action.error.message;
            } )
    }
})

export default vacancyWorkerPermissionSlice.reducer