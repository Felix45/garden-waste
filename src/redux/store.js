import { configureStore } from '@reduxjs/toolkit';
import optionsReducer from './options/optionsSlice';

const store = configureStore({
    reducer: {
        options: optionsReducer
    }
});

export default store;
