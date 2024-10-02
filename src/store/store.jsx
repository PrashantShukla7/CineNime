import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/MovieSlice.jsx'
import peopleReducer from './reducers/PeopleSlice.jsx'
import tvReducer from './reducers/TvSlice.jsx'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    person : peopleReducer,
    tv : tvReducer,
  },
})