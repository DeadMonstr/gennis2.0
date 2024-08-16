import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";



export const fetchGroupsData = createAsyncThunk(
    "groupsSlice/fetchGroupsData",
    async(id)  =>{
        const {request} = useHttp()
        return await request(`${API_URL}Group/groups/create/`, "GET", null, headers())
    }
)
