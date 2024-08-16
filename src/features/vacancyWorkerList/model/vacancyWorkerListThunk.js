import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../shared/api/base";


export const fetchVacancyWorkerListThunk = createAsyncThunk(
    "vacancyWorkerListSlice/fetchVacancyWorkerListThunk",
    async () =>{
        const {request} = useHttp();
        return await request(`${API_URL}//`, "GET", null, headers())
    }
)