import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlices'

export default configureStore({
  reducer: {
    users: usersReducer,
  }
})