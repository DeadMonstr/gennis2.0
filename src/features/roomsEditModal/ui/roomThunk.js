import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, useHttp, headers} from "../../../shared/api/base";

export const  fetchInsideRoom = createAsyncThunk(
    'roomssSlice/fetchInsideRoom',
    async (id) => {
        const {request} = useHttp();
        return await request(`${API_URL}Rooms/rooms/${id}`,"GET",null,headers())
    }
)

