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

            state.options = state.options.map(option => {
                if (option.id === id) {
                    return { ...option, selected: !option.selected };
                }
                return { ...option, selected: false }; // Deselect others
            });
        },
    }
});

// Export actions
export const { selected } = optionsSlice.actions;

// Export reducer
export default optionsSlice.reducer;
