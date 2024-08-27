import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, useHttp, headers } from "../../../../../shared/api/base";

export const userSetPermissionThunk = createAsyncThunk(
    'userSetPermissionSlice/userSetPermissionThunk',
    async (res, { rejectWithValue }) => {
        const { request } = useHttp();
        try {
            const response = await request(
                `${API_URL}Permissions/add_permissions_managers_and_directors/`,
                "POST",
                JSON.stringify(res),
                headers()
            );
            console.log(res)
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const fetchLocationsForSystemsThunk = createAsyncThunk(
    'userSetPermissionSlice/fetchLocationsForSystems',
    async (selectedSystemIds, { rejectWithValue }) => {
        const { request } = useHttp();
        try {
            const response = await request(
                `${API_URL}Location/location_for_system_branch/`,
                "POST",
                JSON.stringify({ systems: [selectedSystemIds] }),
                headers()
            );
            console.log(selectedSystemIds)
            console.log(response)
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetLocationsForBranchesThunk = createAsyncThunk(
    'userSetPermissionSlice/fetLocationsForBranchesThunk',
    async (selectedLocationIds, {rejectedWithValue}) => {
        const {request} = useHttp();
        const response = await request(
            `${API_URL}Branch/branch_for_locations/`,
            "POST",
            JSON.stringify({locations: selectedLocationIds}),
            headers()
        );
        return response
    }
)
