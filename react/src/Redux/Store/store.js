import { configureStore } from '@reduxjs/toolkit'
import hostReducer from '../Slice/hostSlice/hostSlice'
import buttonReducer, { setButton } from '../Slice/buttonSlice/buttonSlice'
import resumeReducer from '../Slice/resumeSlice/resumeSlice'
export const store = configureStore({
  reducer: {
    hostSwitch: hostReducer,
    button:buttonReducer,
    resumeInput:resumeReducer
  },
})
