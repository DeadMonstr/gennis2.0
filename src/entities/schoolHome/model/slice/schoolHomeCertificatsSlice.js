import {createSlice} from "@reduxjs/toolkit";
import {fetchAddCertificat, fetchCertificatData} from "../thunk/schoolHomeCertificatsThunk";

const initialState = {
    data: null,
    loading: false,
    error: null
}

const schoolHomeCertificatSlice = createSlice({
    name: "schoolHomeCertificatSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchCertificatData.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchCertificatData.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchCertificatData.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(fetchAddCertificat.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchAddCertificat.fulfilled, (state, action) => {
                state.data = [...state.data, action.payload]
                state.loading = false
                state.error = null
            })
            .addCase(fetchAddCertificat.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
})

export default schoolHomeCertificatSlice.reducer
