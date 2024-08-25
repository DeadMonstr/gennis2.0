import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";

export const capitalListThunk = createAsyncThunk(
    "capitalList/capitalListThunk",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}Capital/old_capital_list/?status=False` , "GET" , null , headers())
    }
)

export const capitalDeletedListThunk = createAsyncThunk(
    "capitalList/capitalDeletedListThunk",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}Capital/old_capital_list/?status=True` , "GET" , null , headers())
    }
)