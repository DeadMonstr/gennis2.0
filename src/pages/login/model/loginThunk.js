import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, useHttp} from "shared/api/base";

export const fetchLoginUser = createAsyncThunk(
    "loginSlice/fetchLoginUser",
    async (data) => {
        const {request} = useHttp();
        // const token = sessionStorage.getItem("token")
        // const headers = {
        //     "Authorization": "Bearer " + token,
        //     'Content-Type': 'application/json'
        // }
        return await request(`${API_URL}api/token/`, "POST", JSON.stringify(data))
    })
