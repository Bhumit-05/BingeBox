import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState: {
        watchlistButton : true,
        watchlist : JSON.parse(localStorage.getItem('watchlist')) || [],
    },
    reducers: {
        toggleWatchlist : (state) => {
            state.watchlistButton=!state.watchlistButton;
        },
        setWatchlistTrue : (state) => {
            state.watchlistButton =true;
        },
        addToWatchList : (state, action) => {
            const existingMovie = state.watchlist.find(movie => movie.id === action.payload.id);
            if (!existingMovie) {
              state.watchlist.push(action.payload);
            }
          },
        removeMovieFromWatchlist: (state, action) => {
            state.watchlist = state.watchlist.filter(movie => movie.id !== action.payload.id);
        }
    }
})

export const {toggleWatchlist, addToWatchList, removeMovieFromWatchlist, setWatchlistTrue} = watchlistSlice.actions;
export default watchlistSlice.reducer;