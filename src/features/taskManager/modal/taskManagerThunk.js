import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";


export const fetchTaskManager = createAsyncThunk(
    "taskManagerSlice/fetchTaskManager",
    async ({date , taskType,branch}) => {
        const {request} = useHttp()
        return await request(`${API_URL}Lead/${taskType === "completed" ? "lead_list_completed" : "lead_list/"}?date=${date}&branch_id=${branch}`, "GET", null, headers())
    }
)


export const fetchBranch = createAsyncThunk(
    "taskManagerSlice/fetchBranch",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}Branch/branch_list/`, "GET", null, headers())
    }
)

export const fetchAdminTaskManager = createAsyncThunk(
    "taskManagerSlice/fetchAdminTaskManager",
    async ({operator_id, date, branch, taskType}) => {
        const {request} = useHttp()
        return await request(
            `${API_URL}Lead/${taskType === "completed" ? "lead_list_completed" : "lead_list/"}?date=${date}&branch_id=${branch}${operator_id === "all" ? "" : `&operator_id=${operator_id}`}`,
            "GET", null, headers())
    }
)

