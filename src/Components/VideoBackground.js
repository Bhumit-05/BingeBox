import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailer } from '../utils/moviesSlice';
import useMovieVideo from '../hooks/useMovieVideo';

const VideoBackground = ({movieId}) => {

  const trailerKey = useSelector( store => store.movies?.trailerVideo?.key);
  useMovieVideo(movieId);

  return (
    <div><iframe 
        className='w-screen aspect-video py-[-100px]'
        src={"https://www.youtube.com/embed/" + trailerKey+ "?&autoplay=1&mute=1&controls=0&disablekb=1&loop=1&playlist="+trailerKey}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
    </iframe>
    </div>
  )
}

export default VideoBackground;