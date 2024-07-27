import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL , headers , useHttp} from "shared/api/base";


export const fetchTeachersData = createAsyncThunk(
    "teachersSlice/fetchTeachersData",
    async (id) =>{
        const {request} = useHttp()
        return await request(`${API_URL}Teachers/teachers/?limit=1000000` , "GET" , null , headers())
    }
)