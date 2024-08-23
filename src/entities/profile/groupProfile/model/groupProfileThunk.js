import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";
// http://192.168.0.105:8000/Group/groups/profile/{id}/
export const fetchGroupProfile = createAsyncThunk(
    "groupProfileSlice/fetchGroupProfile",
    (id) => {
        const {request} = useHttp()
        return request(`${API_URL}Group/groups/profile/${id}/`, "GET", null, headers())
    }
)
