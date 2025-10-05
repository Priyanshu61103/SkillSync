import { configureStore } from '@reduxjs/toolkit'
import hostReducer from '../Slice/hostSlice/hostSlice'
export const store = configureStore({
  reducer: {
    hostSwitch: hostReducer
  },
})
