import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";


export const fetchNewStudentsData = createAsyncThunk(
    "studentsSlice/fetchNewStudentsData",
     async (id) =>{
        const {request} = useHttp()
         return await request(`${API_URL}Students/students_list/`, "GET" , null , headers())
     }
)