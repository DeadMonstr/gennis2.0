import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";


export const fetchEmployersData = createAsyncThunk(
    "employersSlice/fetchEmployersData",
    async (id) => {
        const {request} = useHttp()
        return request(`${API_URL}Users/employeers/`,"GET", null, headers())
    }
)