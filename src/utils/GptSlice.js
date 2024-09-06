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
        },
        setGptFalse : (state) => {
            state.showGptSearch = false;
        },
    }
})

export default gptSlice.reducer;

export const {toggleGptSearchView, addGptMoviesResult, setGptFalse} = gptSlice.actions;