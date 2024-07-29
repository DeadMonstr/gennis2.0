import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";

export const fetchStudentProfileData = createAsyncThunk(
    "studentProfile/fetchStudentProfileData",
    async (id) => {
        const {request} = useHttp()
        return request(`${API_URL}Students/students/${id}/`, "GET", null, headers())
    }
)