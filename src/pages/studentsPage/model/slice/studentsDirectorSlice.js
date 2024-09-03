import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            title: "New students",
            locations: []
        },
        {
            title: "Studying students",
            locations: []
        },
        {
            title: "Deleted students",
            locations: []
        }
    ],
    loading: false,
    error: null
}

const StudentsDirectorSlice = createSlice({
    name: "StudentsDirectorSlice",
    initialState,
    reducers: {
        getLocations: (state, action) => {
            state.data = state.data.map(item => ({title: item.title ,locations: action.payload}))
            state.loading = false
            state.error = null
        }
    }
})

export default StudentsDirectorSlice.reducer
export const {getLocations} = StudentsDirectorSlice.actions
