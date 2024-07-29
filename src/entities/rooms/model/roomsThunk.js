import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, headers, useHttp } from '../../../shared/api/base';

export const fetchRoomsData = createAsyncThunk(
    'roomsSlice/fetchRoomsData',
    async () => {
        const { request } = useHttp();
        console.log("gvgh")
        return await request(`${API_URL}Rooms/rooms`, 'GET', null, headers())
    }
);
