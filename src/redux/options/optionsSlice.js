import data from './data/data';
import { createSlice } from '@reduxjs/toolkit';


const optionsSlice = createSlice({
    name: 'options',
    initialState: {
        options: data,
    },
    reducers: {
        selected: (state, action) => {
            const { id } = action.payload;
            const option = state.options.find(option => option.id === id);
            if (option) {
                option.selected = !option.selected;
            }
        },
    }
});

// Export actions
export const { selected } = optionsSlice.actions;

// Export reducer
export default optionsSlice.reducer;
