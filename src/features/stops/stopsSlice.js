import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    stops: [],
    status: 'idle'
}
export const fetchStops = createAsyncThunk('stops/fetchStops', async (query) => {
    const { data } = await axios(`https://v5.vbb.transport.rest/locations?query=${query}`)
    return data
})

const stopsSlice = createSlice({
    name: 'stops',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchStops.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchStops.fulfilled, (state, action) => {
                return {status:"fetched", stops:action.payload} 
                // state.stops=state.stops.concat(action.payload)
                // state.stops.push(...action.payload)
            })
    }
})


// export const { } = stopsSlice.actions

export default stopsSlice.reducer