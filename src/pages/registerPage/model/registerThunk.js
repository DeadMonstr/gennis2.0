import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, headers, useHttp } from "shared/api/base";

const getAuthToken = () => {
    const userData = sessionStorage.getItem('token');
    return userData ? userData : null;
};

export const fetchSubjects = createAsyncThunk(
    'user/fetchSubjects',
    async (_, thunkAPI) => {
        const token = getAuthToken();
        if (!token) {
            return "Qayta login qilish kerak "
        }
        const {request} = useHttp()
        return await request(`${API_URL}Subjects/subject/`, "GET", null, headers())
    }
);


export const fetchLanguages = createAsyncThunk(
    'user/fetchLanguages',
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}Language/language/`, "GET", null, headers())
    }
)



export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userData, thunkAPI) => {
        const token = getAuthToken();

        if (!token) {
            return thunkAPI.rejectWithValue('No authorization token found');
        }

        try {
            const response = await fetch(
                `${API_URL}Students/students_create/`,
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

export const registerTeacher = createAsyncThunk(
    'user/registerTeacher',
    async (teacherData, thunkAPI) => {
        const token = getAuthToken();

        if (!token) {
            return thunkAPI.rejectWithValue('No authorization token found');
        }

        try {
            const response = await fetch(
                `${API_URL}Teachers/teachers/create/`,
                {
                    method: 'POST',
                    headers: {
                        ...headers,
                        Authorization: `JWT ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(teacherData)
                }
            );

            if (!response.ok) {
                throw new Error('Failed to register teacher');
            }

            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const registerEmployer = createAsyncThunk(
    'user/registerEmployer',
    async (employerData, thunkAPI) => {
        const token = getAuthToken();

        if (!token) {
            return thunkAPI.rejectWithValue('No authorization token found');
        }

        try {
            const response = await fetch(
                `${API_URL}Users/users/create/`,
                {
                    method: 'POST',
                    headers: {
                        ...headers,
                        Authorization: `JWT ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(employerData)
                }
            );

            if (!response.ok) {
                throw new Error('Failed to register employer');
            }

            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
