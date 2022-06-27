import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    details: [],
    status: 'idle'
}
export const fetchDetails = createAsyncThunk('details/fetchDetails', async (id) => {
    const { data } = await axios(`https://v5.vbb.transport.rest/stops/${id}/departures`)
    return data
})

const stopsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchDetails.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchDetails.fulfilled, (state, action) => {
                return {status:"fetched", details:action.payload} 
                // state.stops=state.stops.concat(action.payload)
                // state.stops.push(...action.payload)
            })
    }
})


// export const { } = stopsSlice.actions

export default stopsSlice.reducer