import { createSlice } from '@reduxjs/toolkit'

const initialState=[]


const favoritesSlice= createSlice({
    name:'favorites',
    initialState,
    reducers:{
         addFavorites:(state,action)=>{
            const stop=action.payload
            state.push(stop)
        },
        removeFavorites:(state,action)=>{
            const newId=action.payload
            state.splice(state.findIndex(i=>i.id===newId),1)
        }
    }
})

export const {addFavorites,removeFavorites} = favoritesSlice.actions

export default favoritesSlice.reducer