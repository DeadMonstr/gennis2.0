import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";

export const fetchThemeSwitcherSystemsThunk = createAsyncThunk(
    'themeSwitcherSlice/fetchThemeSwitcherSystemsThunk',
    async (selectedSystemIds, {rejectWithValue}) => {
        const {request} = useHttp();
        try {
            const response = await request(
                `${API_URL}Permissions/user_systems/`,
                "GET",
                null,
                headers()
            );

            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
