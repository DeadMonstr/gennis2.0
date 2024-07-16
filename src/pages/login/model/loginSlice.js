import {createSlice} from "@reduxjs/toolkit";
import {useNavigate} from "react-router";

import {fetchLoginUser} from "./loginThunk";

const initialState ={
    username: "",
    password: "",
    role: null,
    loading: false,
    error: null
}

export const loginSlice =createSlice({
    name: "loginSlice",
    initialState,
    reducers: {
        getUserData: (state, action) => {
            console.log(action.payload)
            sessionStorage.setItem('token', action.payload.access);
            sessionStorage.setItem('refresh_token', action.payload.refresh);
            state.role = action.payload.admin
            state.loading = false
            state.error = null
        }
    },
    extraReducers: builder =>
        builder
            .addCase(fetchLoginUser.pending,state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchLoginUser.fulfilled , (state , action) =>{
                console.log(action.payload)
                sessionStorage.setItem('token', action.payload.access);
                sessionStorage.setItem('refresh_token', action.payload.refresh);
                state.role = action.payload.admin
                state.username = action.payload
                state.password = action.payload
                state.loading = false
                state.error = null
                const navigate = useNavigate()
                navigate("/platform")
            })
            .addCase(fetchLoginUser.rejected,(state ,action) =>{
                state.loading = false
                state.error = action.payload ?? null
            })
})
export default loginSlice.reducer
export const {getUserData} = loginSlice.actions