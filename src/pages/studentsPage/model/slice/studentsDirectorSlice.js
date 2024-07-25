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
                            name: "Chirchiq",
                            count: 222
                        },
                        {
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
                            name: "Gazalkent",
                            count: 222
                        },
                        {
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
                            name: "Xo’jakent",
                            count: 222
                        },
                        {
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
                            name: "Chirchiq",
                            count: 222
                        },
                        {
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
                            name: "Gazalkent",
                            count: 222
                        },
                        {
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
                            name: "Xo’jakent",
                            count: 222
                        },
                        {
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
                            name: "Chirchiq",
                            count: 222
                        },
                        {
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
                            name: "Gazalkent",
                            count: 222
                        },
                        {
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
                            name: "Xo’jakent",
                            count: 222
                        },
                        {
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
    reducers: {}
})

export default StudentsDirectorSlice.reducer
// export const {} = StudentsDirectorSlice.actions
