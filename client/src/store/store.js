import { configureStore } from '@reduxjs/toolkit';
import surveySlice from './surveySlice';

const store = configureStore({
    reducer: {
        survey: surveySlice,
    },
    devTools: true
});

export default store;