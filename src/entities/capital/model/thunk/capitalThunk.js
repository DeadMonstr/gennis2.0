import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, headersImg, useHttp} from "../../../../shared/api/base";



export const getCapitalDataThunk = createAsyncThunk(
    'capitalSlice/getCapitalDataThunk',
    async () =>{
        const {request} = useHttp()
        return await request(`${API_URL}Capital/capital_category/` , "GET" , null , headers())
    }
)




export const createCapitalCategory = createAsyncThunk(
    'capitalSlice/createCapitalCategory',
    async ({data , changedImages}) =>{
        const {request} = useHttp()
        const formData = new FormData
        formData.append("img", changedImages )
        formData.append("name", data.name)
        formData.append("id_number" ,data.id_number)
        return await request(`${API_URL}Capital/capital_category/` ,"POST", formData , headersImg())

    }
)



export const getCapitalInfo = createAsyncThunk(
    "capitalSlice/getCapitalInfo",
    async (id) =>{
        const {request} =useHttp()
        return await request(`${API_URL}Capital/capital_category/${id}` , "GET" , null , headers())
    }

)


export const changeCapitalInfoThunk  =createAsyncThunk(
    "changeCapitalInfo/changeCapitalInfoThunk",
    async ({id ,data})=>{
        const {request} = useHttp()
        return await request(`${API_URL}Capital/capital_category/${id}/` , "PATCH" , JSON.stringify(data) , headers())
    }
)

