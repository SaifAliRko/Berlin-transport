import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../../features/favorites/favoritesSlice'
import stopsReducer from '../../features/stops/stopsSlice'
import detailsReducer from '../../features/details/detailsSlice'
export default configureStore({
  reducer: {
    favorites: favoritesReducer,
    stops: stopsReducer,
    details:detailsReducer
  },
})  