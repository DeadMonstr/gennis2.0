import { createSlice } from "@reduxjs/toolkit";
import {userSetPermissionThunk, fetchLocationsForSystemsThunk, fetLocationsForBranchesThunk} from "./userSetPermissionThunk";

const initialState = {
    newPermission: [],
    locations: [],
    branches: [],
    loading: false,
    error: null
};

export const userSetPermissionSlice = createSlice({
    name: "userSetPermissionSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(userSetPermissionThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(userSetPermissionThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.newPermission = action.payload;
            })
            .addCase(userSetPermissionThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchLocationsForSystemsThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchLocationsForSystemsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.locations = action.payload;
            })
            .addCase(fetchLocationsForSystemsThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetLocationsForBranchesThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetLocationsForBranchesThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.branches  = action.payload;
            })
            .addCase(fetLocationsForBranchesThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default userSetPermissionSlice.reducer;
