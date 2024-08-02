import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, headersImg, useHttp} from "shared/api/base";

export const fetchStudentProfileData = createAsyncThunk(
    "studentProfile/fetchStudentProfileData",
    async (id) => {
        const {request} = useHttp()
        return request(`${API_URL}Students/students/${id}/`, "GET", null, headers())
    }
)

export const changeStudentProfileData = createAsyncThunk(
    "studentProfile/changeStudentProfileData",
    async (obj) => {
        const {request} = useHttp()
        return request(`${API_URL}Students/students/${obj.id}/`, "PATCH", JSON.stringify(obj.res), headers())
    }
)

export const changeStudentProfileImage = createAsyncThunk(
    "studentProfile/changeStudentProfileImage",
    async ({id, file}) => {
        const formData = new FormData
        formData.append("profile_img", file[0])
        const {request} = useHttp()
        return request(`${API_URL}Users/users/${id}/`, "PATCH", formData, headersImg())
    }
)
