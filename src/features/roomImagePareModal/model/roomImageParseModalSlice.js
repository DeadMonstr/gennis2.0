import { createSlice } from '@reduxjs/toolkit';
import { fetchRoomImages } from './roomImageParseModalThunk';

const initialState = {
    roomImageData: [],
    roomsStatus: 'idle',
    error: null
};

export const roomImageSlice = createSlice({
    name: 'roomImageSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRoomImages.pending, (state) => {
                state.roomsStatus = 'loading';
            })
            .addCase(fetchRoomImages.fulfilled, (state, action) => {
                state.roomImageData = action.payload; // Ma'lumotni to'g'ridan-to'g'ri olish
                state.roomsStatus = 'success';
            })
            .addCase(fetchRoomImages.rejected, (state) => {
                state.error = 'error';
            });
    }
});

export default roomImageSlice.reducer;
