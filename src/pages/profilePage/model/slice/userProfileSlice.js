import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            salary: 3000,
            theRest: 1000,

        }
    ],
    loading: false,
    error: null
}

const userProfileSlice  = createSlice({
    name: "userProfile",
    initialState,
    reducers: {}
})

export default userProfileSlice.reducer
