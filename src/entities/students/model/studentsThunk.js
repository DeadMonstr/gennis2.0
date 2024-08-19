import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";


export const fetchNewStudentsData = createAsyncThunk(
    "studentsSlice/fetchNewStudentsData",
     async (id) =>{
        const {request} = useHttp()
         return await request(`${API_URL}Students/students_list/`, "GET" , null , headers())
     }
)

export const fetchFilteredStudents = createAsyncThunk(
    "studentsSlice/fetchFilteredStudents",
    async (id) => {
        const {request} = useHttp()
        // return await request(`${API_URL}Students/api/filter_students_subject/1/`, "GET", null, headers())
        return await request(`${API_URL}Students/api/filter_students_subject/${id}/`, "GET", null, headers())
    }
)
