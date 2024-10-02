import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/MovieSlice'
import peopleReducer from './reducers/PeopleSlice'
import tvReducer from './reducers/TvSlice'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    person : peopleReducer,
    tv : tvReducer,
  },
})