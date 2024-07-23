import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, headers, useHttp } from "shared/api/base";

// Helper function to get the authorization token
const getAuthToken = () => {
    const userData = sessionStorage.getItem('token');
    return userData ? userData : null;
};

// Thunk for fetching subjects and languages
export const fetchSubjectsAndLanguages = createAsyncThunk(
    'user/fetchSubjectsAndLanguages',
    async (_, thunkAPI) => {
        const token = getAuthToken();

        if (!token) {
            return thunkAPI.rejectWithValue('No authorization token found');
        }

        try {
            const [subjectsResponse, languagesResponse] = await Promise.all([
                fetch(`${API_URL}Subjects/subject/?limit=20`, {
                    headers: {
                        ...headers,
                        Authorization: `JWT ${token}`
                    }
                }),
                fetch(`${API_URL}Language/language/`, {
                    headers: {
                        ...headers,
                        Authorization: `JWT ${token}`
                    }
                })
            ]);

            if (!subjectsResponse.ok || !languagesResponse.ok) {
                throw new Error('Failed to fetch data');
            }

            const subjectsData = await subjectsResponse.json();
            const languagesData = await languagesResponse.json();

            const subjects = subjectsData.subjects.map(subj => ({ id: subj.id, name: subj.name, ball_number: subj.ball_number }));
            const languages = languagesData.languages.map(lang => ({ id: lang.id, name: lang.name }));

            console.log(languages)

            return { subjects, languages };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Thunk for registering user
export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userData, thunkAPI) => {
        const token = getAuthToken();

        if (!token) {
            return thunkAPI.rejectWithValue('No authorization token found');
        }

        try {
            const response = await fetch(
                `${API_URL}Students/students/`,
                {
                    method: 'POST',
                    headers: {
                        ...headers,
                        Authorization: `JWT ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                }
            );

            if (!response.ok) {
                throw new Error('Failed to register user');
            }

            const data = await response.json();
            console.log(data)
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
