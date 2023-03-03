import { createSlice } from '@reduxjs/toolkit';

export const presentsSlice = createSlice({
    name: 'presents',
    initialState: {
        selectedCategory: "FLOWERS"
    },
    reducers: {
    filterCategory: (state, action) => {
        state.selectedCategory = action.payload;
    }
    }
})

export const getSelectedCategory = state => state.presents.selectedCategory;
export const { filterCategory } = presentsSlice.actions;
export default presentsSlice.reducer; 