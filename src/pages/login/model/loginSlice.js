import {createSlice} from "@reduxjs/toolkit";
import {fetchLoginUser} from "./loginThunk";

const initialState ={
    username: "",
    password: "",
    loading: false,
    error: null
}

export const loginSlice =createSlice({
    name: "loginSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchLoginUser.pending,state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchLoginUser.fulfilled , (state , action) =>{
                state.username = action.payload
                state.password =action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchLoginUser.rejected,(state ,action) =>{
                state.loading = false
                state.error = action.payload ?? null
            })
})
export default loginSlice.reducer