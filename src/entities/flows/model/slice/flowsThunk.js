import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";


export const fetchFlows = createAsyncThunk(
    "flowsSlice/fetchFlows",
    async (id) => {
        const {request} = useHttp()
        return await request(`${API_URL}Flow/flow-list/` , "GET", null , headers())
    }
)