import { configureStore } from '@reduxjs/toolkit'
import questionReducer from './features/questions/questionsSlice'

export default configureStore({
    reducer: {
        questions: questionReducer,
    }
})
