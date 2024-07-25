import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";


export const fetchNewStudentsData = createAsyncThunk(
    "newStudentsSlice/fetchNewStudentsData",
     async (id) =>{
        const {request} = useHttp()
         return await request(`${API_URL}Students/students/`, "GET" , null , headers())
     }
)