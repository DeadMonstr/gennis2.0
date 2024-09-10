import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../shared/api/base";


export  const teacherGroupThunk = createAsyncThunk(
    'teacherGroupSlice/teacherGroupThunk',
    async (id) => {
        const {request} = useHttp()
        return request(`${API_URL}Teachers/group-student/${id}`, "GET", null, headers())
    }
)