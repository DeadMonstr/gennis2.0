import {createSlice} from "@reduxjs/toolkit";
import {fetchLocationsThunk} from "features/locations/model/thunk/locationsThunk";

const initialState = {
    locations: [],
    selectedLocations: [],
    loading: false,
    fetchStatus: "idle",
    error: null
}

const locationsSlice = createSlice({
    name: "ChangeLocationSlice",
    initialState,
    reducers: {
        addSelectedLocations: (state,action) => {
            const filteredLocation = state.locations.filter(item => item.id === +action.payload)[0]
            localStorage.setItem("selectedLocations", JSON.stringify([...state.selectedLocations,filteredLocation]))
            state.selectedLocations = [...state.selectedLocations,filteredLocation]

            state.locations = state.locations.map(item => {
                if (item.id === +action.payload) {
                    return {
                        ...item,
                        disabled: true
                    }

                }
                return item
            })

        },

        deleteSelectedLocations: (state,action) => {
            localStorage.setItem("selectedLocations", JSON.stringify(state.selectedLocations.filter(item => item.id !== +action.payload)))
            state.selectedLocations = state.selectedLocations.filter(item => item.id !== +action.payload)
            state.locations = state.locations.map(item => {
                if (item.id === +action.payload) {
                    return {
                        ...item,
                        disabled: false
                    }
                }

                return item
            })

        },


        clearSelectedLocations: (state) => {
            state.selectedLocations = []
            localStorage.removeItem("selectedLocations")
        }
    },
    extraReducers: builder =>
        builder
            .addCase(fetchLocationsThunk.pending, state => {
                state.loading = true
                state.error = null
                state.fetchStatus = "pending"
            })
            .addCase(fetchLocationsThunk.fulfilled, (state, action) => {
                if (action.payload.length > 1) {
                    state.locations = action.payload
                } else {
                    state.locations = action.payload.map(item => {
                        return {
                            ...item,
                            disabled: false
                        }
                    })
                    state.locations =
                    state.selectedLocations = action.payload.filter(item => item.id !== +action.payload)
                }

                state.loading = false
                state.error = null
                state.fetchStatus = "success"
            })
            .addCase(fetchLocationsThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload ?? null
                state.fetchStatus = "error"

            })


})

export default locationsSlice.reducer
export const {deleteSelectedLocations,addSelectedLocations,clearSelectedLocations} = locationsSlice.actions
