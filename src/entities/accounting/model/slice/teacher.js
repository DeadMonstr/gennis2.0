import {createSlice} from "@reduxjs/toolkit";
import {changePaymentType} from "../thunk/teacherSalarythunk";



const initialState = {
    teacherSalary: [
        {
            name: "sardor",
            surname: "ikromov",
            salary: "12123123",
            comment: "kere buldi",
            date: "12.21.12",
            payment_types: "cash",
            deleted: true,
            id: 1
        },
        {
            name: "sardor",
            surname: "ikromov",
            salary: "12123123",
            comment: "kere buldi",
            date: "12.21.12",
            payment_types: "click",
            deleted: true,
            id: 2
        },
        // {name: "sardor" , surname: "ikromov" , salary: "312323232" , comment: "kere buldi" , date: "12.21.12" , paymentType: "cash" , deleted: true , id:3},
        {
            name: "sardor",
            surname: "ikromov",
            salary: "3",
            comment: "kere buldi",
            date: "12.21.12",
            payment_types: "cash",
            deleted: false,
            id: 4
        },


    ],
    loading: false,
    error: false
}

const teacherSalary = createSlice({
    name: "teacherSalary",
    initialState,
    reducers: {
        onDeleteTeacherSalary: (state, action) => {
            state.teacherSalary = state.teacherSalary.filter(item => item.id !== action.payload.id)
        },
        onChangePayment: (state,action) => {
            state.teacherSalary.payment_types = state.teacherSalary.payment_types.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, payment_types: action.payload.payment_types}
                }
                return item
            })
        }
    },
    extraReducers: builder =>
        builder
            // .addCase(changePaymentType.pending, state => {
            //     state.loading = true
            //     state.error = null
            // })
            // .addCase(changePaymentType.fulfilled, (state, action) => {
            //     state.teacherSalary = action.payload
            //     state.loading = false
            //     state.error = null
            // })
            // .addCase(changePaymentType.rejected, (state, action) => {
            //     state.loading = false
            //     state.error = action.payload ?? null
            // })
})

export const {onDeleteTeacherSalary, onChangePayment} =  teacherSalary.actions
export default teacherSalary.reducer