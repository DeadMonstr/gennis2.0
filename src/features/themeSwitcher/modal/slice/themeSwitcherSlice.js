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
                state.systems = action.payload

                const localSystem = JSON.parse(localStorage.getItem("selectedSystem"))
                if (!localSystem && !localSystem?.id) {
                    state.system = {
                        id: action.payload[0].id,
                        type: action.payload[0].type
                    }

                    localStorage.setItem("selectedSystem", JSON.stringify({
                        id: action.payload[0].id,
                        type: action.payload[0].type
                    }))
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
