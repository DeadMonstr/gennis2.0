import {createSlice} from "@reduxjs/toolkit";
import {editGallery, fetchAddGallery, fetchHomeGalleryData} from "../thunk/schoolHomeGalleryThunk";

const initialState = {
    data: null,
    loading: false,
    error: null
}

const schoolHomeGallerySlice = createSlice({
    name: "schoolHomeGallerySlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchHomeGalleryData.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchHomeGalleryData.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchHomeGalleryData.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(fetchAddGallery.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchAddGallery.fulfilled, (state, action) => {
                state.data = [...state.data, action.payload]
                state.loading = false
                state.error = null
            })
            .addCase(fetchAddGallery.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(editGallery.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(editGallery.fulfilled, (state, action) => {
                state.data = state.data.map(
                    item => {
                        if (item?.id === action.payload.id) {
                            console.log(item)
                            return action.payload
                        } else return item
                    }
                )
                state.loading = false
                state.error = null
            })
            .addCase(editGallery.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
})

export default schoolHomeGallerySlice.reducer
