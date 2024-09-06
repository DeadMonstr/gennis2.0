import {createSlice} from "@reduxjs/toolkit";
import {
    classItem,
    createClassType, createColor,
    getClassTypeNumber,
    getClassTypes,
    getColor, updateClassItem,
    updateClassType
} from "../thunk/classThunk";

const initialState = {
    loading: false,
    error: false,
    classData: [],
    classTypeNumber: [],
    classItems: [],
    color: [],
}

const classSlice = createSlice({
    name: "classSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getClassTypes.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(getClassTypes.fulfilled, (state, action) => {
                state.classData = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(getClassTypes.rejected, state => {
                state.error = true
                state.loading = false
            })

            .addCase(createClassType.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(createClassType.fulfilled, (state, action) => {
                state.classData = [...state.classData, action.payload]
                state.loading = false
                state.error = false
            })
            .addCase(createClassType.rejected, state => {
                state.error = true
                state.loading = false
            })


            .addCase(updateClassType.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(updateClassType.fulfilled, (state, action) => {
                state.classData = [
                    ...state.classData.filter(item => item.id !== action.payload.id),
                    action.payload
                ]
                state.loading = false
                state.error = false
            })
            .addCase(updateClassType.rejected, state => {
                state.error = true
                state.loading = false
            })

            .addCase(getClassTypeNumber.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(getClassTypeNumber.fulfilled, (state, action) => {
                state.classTypeNumber = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(getClassTypeNumber.rejected, state => {
                state.error = true
                state.loading = false
            })

            .addCase(classItem.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(classItem.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.classItems =  action.payload
                console.log(action.payload , "classsdsad")

            })
            .addCase(classItem.rejected, state => {
                state.loading = false
                state.error = true
            })



            .addCase(updateClassItem.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(updateClassItem.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.classItems =  [
                    ...state.classItems.filter(item => item.id !== action.payload.id),
                    action.payload
                ]

            })
            .addCase(updateClassItem.rejected, state => {
                state.loading = false
                state.error = true
            })



            .addCase(createColor.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(createColor.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.color =  [...state.color , action.payload]

            })
            .addCase(createColor.rejected, state => {
                state.loading = false
                state.error = true
            })



            .addCase(getColor.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(getColor.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.color =  action.payload

            })
            .addCase(getColor.rejected, state => {
                state.loading = false
                state.error = true
            })

})

export default classSlice.reducer