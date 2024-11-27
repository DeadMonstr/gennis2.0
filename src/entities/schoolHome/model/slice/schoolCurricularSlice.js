import {createSlice} from "@reduxjs/toolkit";

import imgStudent from "shared/assets/images/curcilurum2.svg"
import imgSubjext from "shared/assets/images/CreditCard.png"

const initialState = {
    data: [
        {
            class: "1 - 4 ",
            name: "SINF CAMBRIDGE-PRIMA",
            text: "There are many variations of passages of Lorem Ipsum available There are many variations of passages of Lorem Ipsum available There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available There are many variations of passages of Lorem Ipsum available There are many variations of passages of Lorem Ipsum available There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available",
            img: imgStudent,
            id: 1
        },
        {
            class: "1 - 4 ",
            name: "SINF CAMBRIDGE-PRIMA",
            text: "ations of passages of Lorem Ipsum available",
            img: imgStudent,
            id: 2
        },
        {
            class: "1",
            name: "S",
            text: "ations of passages of Lorem Ipsum available",
            img: imgStudent,
            id: 3
        },
        {
            class: "1 - 4 ",
            name: "SINF -PRIMASINF -PRIMASINF -PRIMA",
            text: "ations of passages of Lorem Ipsum available",
            img: imgStudent,
            id: 4
        },
        {
            class: "132132ewqewqeqwe",
            name: "loremd - sadosfdehfi ,xsg mfdgf",
            text: "ations of passages of Lorem Ipsum available",
            img: imgStudent,
            id: 5
        },
    ],
    curriculum: [
        {
            subject_name: "It",
            descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            id: 1,
            img:imgSubjext

        }
    ]
}


const schoolCurricularSlice = createSlice({
    name: "schoolCurricularSlice",
    reducers: {
        onAddCurricular: (state, action) => {
            state.data = [...state.data, action.payload]
        },

        onDeleteCurricular: (state, action) => {
            state.data = [...state.data.filter(item => item.id !== action.payload)]
        },
        onEditCurricular: (state, action) => {
            state.data = [...state.data.filter(item => item.id !== action.payload.id), action.payload.data]
        },




        onExtraAddCurricular: (state, action) => {
            state.curriculum = [...state.curriculum, action.payload]
        },

        onExtraDeleteCurricular: (state, action) => {
            state.curriculum = [...state.curriculum.filter(item => item.id !== action.payload)]
        },
        onExtraEditCurricular: (state, action) => {
            state.curriculum = [...state.curriculum.filter(item => item.id !== action.payload.id), action.payload.data]
        },
    },
    initialState,
    extraReducers: builder => {
    }
})


export const {onDeleteCurricular, onAddCurricular, onEditCurricular , onExtraEditCurricular , onExtraAddCurricular , onExtraDeleteCurricular} = schoolCurricularSlice.actions
export default schoolCurricularSlice.reducer