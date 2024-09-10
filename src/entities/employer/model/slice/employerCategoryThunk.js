import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";

export const getEmployerCategory = createAsyncThunk(
    "employerCategory/getEmployerCategory",
    async () => {
        const {request} = useHttp()

        return await request(`${API_URL}Teachers/salary-types/`, "GET", null, headers())
    }
)