import {createSlice} from "@reduxjs/toolkit";

import imgProfile from "shared/assets/icons/leaderSheap.svg"

const initialState = {
    data: [
        {
            name: "Jordyn Septimus",
            job: "Software Engineer",
            descr: "There are many variations of passages of Lorem Ipsum available",
            img: imgProfile,
            id: 1
        },
        {
            name: "Jordyn Septimus",
            job: "Software Engineer",
            descr: "There are many variations of passages of Lorem Ipsum available",
            img: imgProfile,
            id: 1
        },
        {
            name: "Jordyn Septimus",
            job: "Software Engineer",
            descr: "There are many variations of passages of Lorem Ipsum available",
            img: imgProfile,
            id: 1
        },
        {
            name: "Jordyn Septimus",
            job: "Software Engineer",
            descr: "There are many variations of passages of Lorem Ipsum available",
            img: imgProfile,
            id: 1
        },
        {
            name: "Jordyn Septimus",
            job: "Software Engineer",
            descr: "There are many variations of passages of Lorem Ipsum available",
            img: imgProfile,
            id: 1
        },
        {
            name: "Jordyn Septimus",
            job: "Software Engineer",
            descr: "There are many variations of passages of Lorem Ipsum available",
            img: imgProfile,
            id: 1
        },
        {
            name: "Jordyn Septimus",
            job: "Software Engineer",
            descr: "There are many variations of passages of Lorem Ipsum available",
            img: imgProfile,
            id: 1
        },
    ]
}


const schoolLeaderSheapSlice = createSlice({
    name: "schoolLeaderSheapSlice",
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

export const {onAdd , onDelete , onEdit} = schoolLeaderSheapSlice.actions
export default schoolLeaderSheapSlice.reducer