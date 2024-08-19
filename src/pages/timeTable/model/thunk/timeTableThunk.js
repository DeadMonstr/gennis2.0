import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";

export const fetchTimeTableData = createAsyncThunk(
    "fetchTimeTableData",
    async () => {
        const {request} = useHttp()
        // return await request(`${API_URL}Permissions/get_all_groups/`, "GET", null)
        // return await request(`${API_URL}Permissions/tables/`, "GET", null)
        return await request(`${API_URL}Permissions/tables/`, "POST", JSON.stringify({table: "permissions_manybranch"}))
    }
)
