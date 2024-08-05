import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, useHttp, headers } from '../../../shared/api/base';

export const fetchRoomImages = createAsyncThunk(
    'roomImageSlice/fetchRoomImages',
    async (id) => {
        const { request } = useHttp();
        const response = await request(`${API_URL}Rooms/rooms_image/${id}/`, 'GET', null, headers());
        return response.roomimages; // roomimages arrayini qaytarish
    }
);
