import {createSlice} from "@reduxjs/toolkit";

import {
    fetchSubjectsData,
    fetchLanguagesData,
    fetchClassColorData,
    fetchClassNumberData,
    fetchClassTypeData, fetchCategories
} from "./oftenUsedThunk";

const initialState = {
    subjects: [],
    subjectsLoading: false,
    subjectsError: null,
    languages: [],
    languagesLoading: false,
    languagesError: null,
    classColor: [],
    classColorLoading: false,
    classColorError: null,
    classNumber: [],
    classNumberLoading: false,
    classNumberError: null,
    classType: [],
    classTypeLoading: false,
    classTypeError: null,
    teachers: [],
    teachersLoading: false,
    teachersError: null,
    categories: []
}

const oftenUsedSlice = createSlice({
    name: "oftenUsedSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchSubjectsData.pending, (state) => {
                state.subjectsLoading = true
                state.subjectsError = null
            })
            .addCase(fetchSubjectsData.fulfilled, (state, action) => {
                state.subjects = action.payload
                state.subjectsLoading = false
                state.subjectsError = null
            })
            .addCase(fetchSubjectsData.rejected, (state) => {
                state.subjectsLoading = false
                state.subjectsError = "error"
            })
            .addCase(fetchLanguagesData.pending, (state) => {
                state.languagesLoading = true
                state.languagesError = null
            })
            .addCase(fetchLanguagesData.fulfilled, (state, action) => {
                state.languages = action.payload
                state.languagesLoading = false
                state.languagesError = null
            })
            .addCase(fetchLanguagesData.rejected, (state) => {
                state.languagesLoading = false
                state.languagesError = "error"
            })
            .addCase(fetchClassColorData.pending, (state) => {
                state.classColorLoading = true
                state.classColorError = null
            })
            .addCase(fetchClassColorData.fulfilled, (state, action) => {
                state.classColor = action.payload
                state.classColorLoading = false
                state.classColorError = null
            })
            .addCase(fetchClassColorData.rejected, (state) => {
                state.classColorLoading = false
                state.classColorError = "error"
            })
            .addCase(fetchClassNumberData.pending, (state) => {
                state.classNumberLoading = true
                state.classNumberError = null
            })
            .addCase(fetchClassNumberData.fulfilled, (state, action) => {
                state.classNumber = action.payload
                state.classNumberLoading = false
                state.classNumberError = null
            })
            .addCase(fetchClassNumberData.rejected, (state) => {
                state.classNumberLoading = false
                state.classNumberError = "error"
            })
            .addCase(fetchClassTypeData.pending, (state) => {
                state.classTypeLoading = true
                state.classTypeError = null
            })
            .addCase(fetchClassTypeData.fulfilled, (state, action) => {
                state.classType = action.payload
                state.classTypeLoading = false
                state.classTypeError = null
            })
            .addCase(fetchClassTypeData.rejected, (state) => {
                state.classTypeLoading = false
                state.classTypeError = "error"
            })


            .addCase(fetchCategories.pending, (state) => {
                state.classTypeLoading = true
                state.classTypeError = null
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload
                state.classTypeLoading = false
                state.classTypeError = null
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.classTypeLoading = false
                state.classTypeError = "error"
            })
})

export default oftenUsedSlice.reducer
