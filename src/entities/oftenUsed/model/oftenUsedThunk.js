import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, headers, useHttp} from "shared/api/base";

export const fetchSubjectsData = createAsyncThunk(
    'oftenUsedSlice/fetchSubjectsData',
    () => {
        const {request} = useHttp()
        return request(`${API_URL}Subjects/subject/`, "GET", null, headers())
    }
)

export const fetchLanguagesData = createAsyncThunk(
    'oftenUsedSlice/fetchLanguagesData',
    () => {
        const {request} = useHttp()
        return request(`${API_URL}Language/language/`, "GET", null, headers())
    }
)

export const fetchClassColorData = createAsyncThunk(
    "oftenUsedSlice/fetchClassColorData",
    () => {
        const {request} = useHttp()
        return request(`${API_URL}Class/class_colors/`, "GET", null, headers())
    }
)

export const fetchClassNumberData = createAsyncThunk(
    "oftenUsedSlice/fetchClassNumberData",
    ({branch}) => {
        const {request} = useHttp()
        return request(`${API_URL}Class/class_number_list/?branch=${branch}`, "GET", null, headers())
    }
)

export const fetchClassTypeData = createAsyncThunk(
    "oftenUsedSlice/fetchClassTypeData",
    ({branch}) => {
        const {request} = useHttp()
        return request(`${API_URL}Class/class_types/?branch=${branch}`, "GET", null, headers())
    }
)