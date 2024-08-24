import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies.js';
import useTopRatedMovies from '../hooks/useTopRated.js';
import useUpcomingMovies from '../hooks/useUpcomingMovies.js';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch.js';


const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header/>
      {showGptSearch? (<GptSearch/>) : 
      (<><MainContainer/>
        <SecondaryContainer/>
      </>)}
      
    </div>
  )
}

export default Browse;