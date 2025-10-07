import { configureStore } from '@reduxjs/toolkit'
import hostReducer from '../Slice/hostSlice/hostSlice'
import buttonReducer, { setButton } from '../Slice/buttonSlice/buttonSlice'
export const store = configureStore({
  reducer: {
    hostSwitch: hostReducer,
    button:buttonReducer,
  },
})
