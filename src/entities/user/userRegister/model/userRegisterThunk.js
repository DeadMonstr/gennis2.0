import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, useHttp} from "../../../../shared/api/base";

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userData, thunkAPI) => {
        const {request} = useHttp(); // Moved inside the thunk

        return await request(`${API_URL}/register`, 'POST', JSON.stringify(userData));

    }
);