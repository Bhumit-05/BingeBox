import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);

  return (
    movies.nowPlayingMovies && (
    <div className=' bg-black'>
        <div className='md:-mt-[430px] mt-0 pb-[50px] relative z-20'>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
            <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
            <MovieList title={"Popular TV Series"} movies={movies.popularMovies}/>
        </div>
    </div>)
  )
}

export default SecondaryContainer;