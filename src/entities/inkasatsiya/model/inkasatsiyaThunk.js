import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../shared/api/base";


export const inkasatsiyaThunk = createAsyncThunk(
    "inkasatsiyaSlice/inkasatsiyaThunk",
    async (res) => {
        const {request} = useHttp()
        return await request(`${API_URL}Encashment/encashment/`, "POST", JSON.stringify(res), headers())
    }
)