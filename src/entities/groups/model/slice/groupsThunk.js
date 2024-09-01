import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";



export const fetchGroupsData = createAsyncThunk(
    "groupsSlice/fetchGroupsData",
    async({locationId})  =>{
        const {request} = useHttp()
        return await request(`${API_URL}Group/groups/create/?location=${locationId}`, "GET", null, headers())
    }
)
