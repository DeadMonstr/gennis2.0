import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunks
export const fetchSubjectsAndLanguages = createAsyncThunk(
    'user/fetchSubjectsAndLanguages',
    async () => {
        const subjectsResponse = await fetch('/api/subjects');
        const languagesResponse = await fetch('/api/languages');
        const subjectsData = await subjectsResponse.json();
        const languagesData = await languagesResponse.json();
        return {
            subjects: subjectsData.results,
            languages: languagesData.languages
        };
    }
);

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userData) => {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        return response.json();
    }
);

// Slice
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
