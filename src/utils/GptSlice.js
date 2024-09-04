import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice ({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMovies : null,
    },
    reducers: {
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMoviesResult : (state, action) => {
            state.gptMovies = action.payload;
        }
    }
})

export default gptSlice.reducer;

export const {toggleGptSearchView, addGptMoviesResult} = gptSlice.actions;