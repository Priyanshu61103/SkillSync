import { configureStore } from '@reduxjs/toolkit'
import hostReducer from '../Slice/hostSlice/hostSlice'
import buttonReducer, { setButton } from '../Slice/buttonSlice/buttonSlice'
import resumeReducer from '../Slice/resumeSlice/resumeSlice'
import detailReducer from '../Slice/detailSlice/detailSlice'
export const store = configureStore({
  reducer: {
    hostSwitch: hostReducer,
    button:buttonReducer,
    resumeInput:resumeReducer,
    details:detailReducer,
  },
})
