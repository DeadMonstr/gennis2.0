import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";

export const getSystemThunk = createAsyncThunk(
    "getSystemSlice/getSystemThunk",
    async () =>{
        const {request} = useHttp()
        return await request(`${API_URL}System/systems/` , "GET" , null , headers())
    }
)