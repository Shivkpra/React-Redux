import { configureStore } from '@reduxjs/toolkit'
import counterReducres from '../features/counter/countersl'
import themeReducres from '../features/add/addslice';

export default configureStore({
    reducer: {
        counter: counterReducres,
        theme: themeReducres,
    },
})

