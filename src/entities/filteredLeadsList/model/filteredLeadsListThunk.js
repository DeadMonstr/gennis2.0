import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";

export const fetchFilteredListData = createAsyncThunk(
    "filteredLeadsListSlice/fetchFilteredListData",
    async ({date,branch}) => {
        const {request} = useHttp()
        return request(`${API_URL}Lead/leads_by_branch/?date=${date}&branch_id=${branch}`,"GET", null, headers())
    }
)