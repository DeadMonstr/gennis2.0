import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            title: "New students",
            locations: [
                {
                    name: "Chirchiq",
                    count: 4,
                    branches: [
                        {
                            id: 1,
                            name: "Chirchiq",
                            count: 222
                        },
                        {
                            id: 2,
                            name: "Chirchiq",
                            count: 222
                        }
                    ]
                },
                {
                    name: "Gazalkent",
                    count: 4,
                    branches: [
                        {
                            id: 3,
                            name: "Gazalkent",
                            count: 222
                        },
                        {
                            id: 4,
                            name: "Gazalkent",
                            count: 222
                        }
                    ]
                },
                {
                    name: "Xo’jakent",
                    count: 4,
                    branches: [
                        {
                            id: 5,
                            name: "Xo’jakent",
                            count: 222
                        },
                        {
                            id: 6,
                            name: "Xo’jakent",
                            count: 222
                        }
                    ]
                }
            ]
        },
        {
            title: "Studying students",
            locations: [
                {
                    name: "Chirchiq",
                    count: 4,
                    branches: [
                        {
                            id: 7,
                            name: "Chirchiq",
                            count: 222
                        },
                        {
                            id: 8,
                            name: "Chirchiq",
                            count: 222
                        }
                    ]
                },
                {
                    name: "Gazalkent",
                    count: 4,
                    branches: [
                        {
                            id: 9,
                            name: "Gazalkent",
                            count: 222
                        },
                        {
                            id: 10,
                            name: "Gazalkent",
                            count: 222
                        }
                    ]
                },
                {
                    name: "Xo’jakent",
                    count: 4,
                    branches: [
                        {
                            id: 11,
                            name: "Xo’jakent",
                            count: 222
                        },
                        {
                            id: 12,
                            name: "Xo’jakent",
                            count: 222
                        }
                    ]
                }
            ]
        },
        {
            title: "Deleted students",
            locations: [
                {
                    name: "Chirchiq",
                    count: 4,
                    branches: [
                        {
                            id: 13,
                            name: "Chirchiq",
                            count: 222
                        },
                        {
                            id: 14,
                            name: "Chirchiq",
                            count: 222
                        }
                    ]
                },
                {
                    name: "Gazalkent",
                    count: 4,
                    branches: [
                        {
                            id: 15,
                            name: "Gazalkent",
                            count: 222
                        },
                        {
                            id: 16,
                            name: "Gazalkent",
                            count: 222
                        }
                    ]
                },
                {
                    name: "Xo’jakent",
                    count: 4,
                    branches: [
                        {
                            id: 17,
                            name: "Xo’jakent",
                            count: 222
                        },
                        {
                            id: 18,
                            name: "Xo’jakent",
                            count: 222
                        }
                    ]
                }
            ]
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
