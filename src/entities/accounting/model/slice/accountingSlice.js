import {createSlice} from "@reduxjs/toolkit";


const pages = [
    {
        value: "studentsPayments",
        name: "O'quvchilar tolovlari",
        disabled: false
    },
    {
        value: "bookPayment",
        name: "Kitob tolovlari",
        disabled: false
    },
    {
        value: "teachersSalary",
        name: "O'qituvchilar oyligi",
        disabled: false
    },
    {
        value: "employeesSalary",
        name: "Ishchilar oyligi",
        disabled: false
    },
    {
        value: "studentsDiscounts",
        name: "O'quvchilar chegirmalari",
        disabled: false
    },
    {
        value: "debtStudents",
        name: "Qarzdor o'quvchilar",
        disabled: false
    },
    {
        value: "overhead",
        name: "Qo'shimcha xarajatlar",
        disabled: false
    },
    {
        value: "capital",
        name: "Kapital xarajatlari",
        disabled: false
    }
]


const initialState = {
    pages: pages
}

const accountingSlice = createSlice({
    name: 'accountingSlice',
    initialState,
    reducers: {
        onChangeAccountingPage: (state, action) => {
            state.pages = state.pages.map(item => {
                if (item.value === action.payload.value) {
                    return {...item, disabled: true}
                }
                return {...item, disabled: false}
            })
        },
    },
    extraReducers: builder => {
    }
})



export const {onChangeAccountingPage} = accountingSlice.actions
export default accountingSlice.reducer

