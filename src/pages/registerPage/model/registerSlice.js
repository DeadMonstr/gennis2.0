import { createSlice } from '@reduxjs/toolkit';
import {fetchSubjectsAndLanguages, registerUser} from "./registerThunk";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: 'idle',
        error: null,
        subjects: [],
        languages: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubjectsAndLanguages.fulfilled, (state, action) => {
                state.subjects = action.payload.subjects;
                state.languages = action.payload.languages;
                console.log(action)
            })
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            });
    },
});

export default userSlice.reducer;
