import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, useHttp } from "../../../shared/api/base";

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userData, thunkAPI) => {
        const { request } = useHttp();

        // Fetch subjects and languages
        try {
            const [subjectsResponse, languagesResponse] = await Promise.all([
                fetch(`${API_URL}Subjects/subject/`),
                fetch(`${API_URL}Language/language/`)
            ]);

            const subjectsData = await subjectsResponse.json();
            const languagesData = await languagesResponse.json();

            // Map fetched data
            const subjects = subjectsData.results.map(subj => ({ id: subj.id, name: subj.name }));
            const languages = languagesData.results.map(lang => ({ id: lang.id, name: lang.name }));

            // Include the fetched data in the user data
            const completeUserData = {
                ...userData,
                subjects,
                languages
            };

            return await request(`${API_URL}Students/students/`, 'POST', JSON.stringify(completeUserData));
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
