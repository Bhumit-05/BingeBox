import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMoives: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        moviePageVideo: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies= action.payload;
        },
        addTrailer: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addMoviePageVideo : (state, action) => {
            state.moviePageVideo = action.payload;
        },
        resetMoviePageVideo : (state) => {
            state.moviePageVideo = null;
        }
    }
})

export const {addNowPlayingMovies, addTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMoviePageVideo, resetMoviePageVideo} = movieSlice.actions;

export default movieSlice.reducer;