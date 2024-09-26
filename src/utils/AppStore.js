import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import moviesReducer from './moviesSlice';
import gptReducer from './GptSlice';
import watchlistReducer from "./WatchlistSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        watchlist: watchlistReducer,
    },
})

appStore.subscribe(() => {
    localStorage.setItem('watchlist', JSON.stringify(appStore.getState().watchlist.watchlist));
});

export default appStore;