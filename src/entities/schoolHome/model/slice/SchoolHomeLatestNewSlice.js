import {createSlice} from "@reduxjs/toolkit";

import imgProfile from "shared/assets/images/latestImg1.svg"
import imgProfile2 from "shared/assets/images/latestImg2.svg"

const initialState = {
    data: [
        {
            name: "What is Lorem Ipsum?",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            img: imgProfile,
            id: 1,
            date: "01/11/2024"
        },
        {
            name: "What is Lorem Ipsum?",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            img: imgProfile2,
            id: 2,
            date: "01/11/2024"
        },
        {
            name: "What is Lorem Ipsum?",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            img: imgProfile,
            id: 3,
            date: "01/11/2024"
        },
    ]
}


const schoolLatestSlice = createSlice({
    name: "schoolLatestSlice",
    reducers: {
        onAdd : (state , action) => {
            state.data = [...state.data , action.payload]
        },
        onDelete : (state , action) => {
            state.data = [...state.data.filter(item => item.id !== action.payload)]
        },
        onEdit : (state , action) => {
            state.data = [...state.data.filter(item => item.id !== action.payload.id) , action.payload.data]
        }


    },
    initialState,
    extraReducers: builder => {}
})

export const {onAdd , onDelete , onEdit} = schoolLatestSlice.actions
export default schoolLatestSlice.reducer