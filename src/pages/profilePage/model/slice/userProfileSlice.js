import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: null
}

const userProfileSlice  = createSlice({
    name: "userProfile",
    initialState,
    reducers: {}
})

export default userProfileSlice.reducer
