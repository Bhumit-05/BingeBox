import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return ;
    const mainMovie = movies[4];

    const {original_title, overview, id } = mainMovie;

  return (
    <div className='md:pt-0 pt-[270px] mb-[220px] bg-black'>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer;