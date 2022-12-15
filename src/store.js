import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Features/users/userSlice'
import loginReducer from './Features/auth/userSlice'

export const store = configureStore({
  reducer: {
    users: userReducer,
    user:loginReducer
  },
})

