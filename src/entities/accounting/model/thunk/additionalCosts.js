import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";

export const getOverheadType = createAsyncThunk(
    "overHeadSlice/getOverheadType",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}Overhead/overheads_type/`, "GET", null, headers())
    }
)

export const getMonthDay = createAsyncThunk(
    "overHeadSlice/getMonthDay",
    async () => {
        const {request} = useHttp()

        return await request(`${API_URL}Overhead/month-days/`, "GET", null, headers())
    }
)

export const overHeadList = createAsyncThunk(
    "overHeadSlice/overHeadList",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}Overhead/overheads/?status=False` , "GET" , null , headers())
    }
)

export const overHeadDeletedList = createAsyncThunk(
    "overHeadSlice/overHeadDeletedList",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}Overhead/overheads/?status=True` , "GET" , null , headers())
    }
)