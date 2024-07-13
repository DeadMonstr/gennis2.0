import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {registerUser} from "./registerThunk";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';

                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default userSlice.reducer