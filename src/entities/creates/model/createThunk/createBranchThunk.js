import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";


export const createBranchThunk = createAsyncThunk(
    "postCreateBranch/createBranchThunk",
    async(data) => {
        const {request} = useHttp();
        return await request(`${API_URL}Branch/branch_create/` , "POST" , JSON.stringify(data) , headers())
    }
)
