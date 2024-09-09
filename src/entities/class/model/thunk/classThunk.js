import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";
import {useDispatch} from "react-redux";
import {onAddAlertOptions} from "../../../../features/alert/model/slice/alertSlice";


export const createClassType = createAsyncThunk(
    "classSlice/createClassType",
    async (data) => {
        const {request} = useHttp()
        return await request(`${API_URL}Class/class_types/`, "POST", JSON.stringify(data), headers())
    }
)


export const getClassTypes = createAsyncThunk(
    "classSlice/getClassTypes",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}Class/class_types`, "GET", null, headers())
    }
)

export const updateClassType = createAsyncThunk(
    "classSlice/updateClassType",
    async ({id, data}) => {
        const {request} = useHttp()

        return await request(`${API_URL}Class/class_types/${id}/`, "PATCH", JSON.stringify(data), headers())
    }
)


export const getClassTypeNumber = createAsyncThunk(
    "classSlice/getClassTypeNumber",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}Class/class_number_list/`, "GET", null, headers())
    }
)


export const classItem = createAsyncThunk(
    "classSlice/classItem",
    async (id) => {
        const {request} = useHttp()
        return await request(`${API_URL}Class/class_number/${id}/`, "GET", null, headers())
    }
)


export const updateClassItem = createAsyncThunk(
    "classSlice/updateClassItem",
    async ({idClass, res}) => {
        const {request} = useHttp()
        return await request(`${API_URL}Class/class_number_update/${idClass}/`, "PATCH", JSON.stringify(res), headers())

    }
)

export const createColor = createAsyncThunk(
    "classSlice/createColor",
    async (res) => {
        const {request} = useHttp()
        return await request(`${API_URL}Class/class_colors/`, "POST", JSON.stringify(res), headers())
    }
)
export const getColor = createAsyncThunk(
    "classSlice/getColor",
    async () => {
        const {request} = useHttp()
        return await request(`${API_URL}Class/class_colors/`, "GET", null, headers())
    }
)


export const updateColor = createAsyncThunk(
    "classSlice/updateColor",
    async ({id, res}) => {
        const {request} = useHttp()
        return await request(`${API_URL}Class/class_colors/${id}/`, "PATCH", JSON.stringify(res), headers())

    }
)

