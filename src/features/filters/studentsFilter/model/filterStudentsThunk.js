import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, branchQueryId, headers, useHttp} from "shared/api/base";

export const fetchFilteredStudents = createAsyncThunk(
    "filterStudents/fetchFilteredStudents",
    async (filterObj) => {
        const {request} = useHttp()
        return await request(
            `${API_URL}`,
            "POST",
            JSON.stringify(filterObj),
            headers()
        )
    }
)

export const fetchDeletedNewStudentsThunk = createAsyncThunk(
    'filterStudents/fetchDeletedNewStudents',
    async () => {
        const {request} = useHttp();
        return await request(`${API_URL}Students/deleted-from-registered/?branch=${branchQueryId()}`, 'GET', null, headers())
    }
)

