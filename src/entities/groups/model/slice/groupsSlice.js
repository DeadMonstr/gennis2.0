
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "rus tili",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "uzb",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "rus",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "rus tili",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "uzb",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "rus",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "rus tili",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "uzb",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "rus",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "rus tili",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "uzb",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "rus",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "rus tili",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "uzb",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "rus",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "rus tili",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "uzb",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "rus",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "rus tili",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "uzb",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "rus",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },
        {
            groupName: "dew1d",
            name: "dadsd",
            surname: "de",
            subject: "ingliz",
            typeCourse: "standart",
            groupPrice: -223,
            deletedDate: "2222.22.22"
        },


    ],
    loading: true,
    error: null
}

export const groupsSlice = createSlice({
    name: "groupsSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {}
})

export default groupsSlice.reducer
