import {createSlice} from "@reduxjs/toolkit";
import {fetchThemeSwitcherSystemsThunk} from "../thunk/themeSwitcherThunk";

const initialState = {
    systems: [
        {
            id: 1,
            name: "Education center",
            number: 2147483647,
            type: "center"
        },
        {
            id: 2,
            name: "School",
            number: 2147483647,
            type: "school"

        }
    ],

    system: {},
    selectedLocations: [],
    loading: false,
    error: null
}

const themeSwitcherSlice = createSlice({
    name: "themeSwitcherSlice",
    initialState,
    reducers: {

        onChangeSystem: (state,action) => {

            const filtered = state.systems.filter(item => item.type === action.payload)[0]

            localStorage.setItem("selectedSystem", JSON.stringify(filtered))
            state.system =  {
                id: filtered.id,
                type: action.payload
            }


        }
    },
    extraReducers: builder =>
        builder
            .addCase(fetchThemeSwitcherSystemsThunk.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchThemeSwitcherSystemsThunk.fulfilled, (state, action) => {
                state.systems = action.payload.map(item => {
                    if (item.id === 1) {

                        const localSystem = JSON.parse(localStorage.getItem("selectedSystem"))

                        if (!localSystem && !localSystem.id) {
                            state.system = {
                                id: item.id,
                                type: "center"
                            }
                        }
                        return {
                            ...item,
                            type: "center"
                        }
                    } else {
                        return {
                            ...item,
                            type: "school"
                        }
                    }
                })
                if (action.payload.length < 2) {
                    if (action.payload[0].id === 1) {
                        state.system =  {
                            ...action.payload[0],
                            type: "center"
                        }
                    } else {
                        state.system = {
                            ...action.payload[0],
                            type: "school"
                        }
                    }

                }


                state.loading = false
                state.error = null
            })
            .addCase(fetchThemeSwitcherSystemsThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
            })


})

export default themeSwitcherSlice.reducer
export const {onChangeSystem} = themeSwitcherSlice.actions
