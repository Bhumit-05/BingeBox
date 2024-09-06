import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToWatchList, removeMovieFromWatchlist } from '../utils/WatchlistSlice';

const MoviePageVideoTitle = ({movie}) => {

    const watchlist = useSelector(store => store.watchlist.watchlist);
    const dispatch = useDispatch();
    const [isPresent, setIsPresent] = useState(watchlist.some(picture => picture.id === movie.id));

    const handleButtonClick = () => {
        if(!isPresent){
            dispatch(addToWatchList(movie));
        }
        else{
            dispatch(removeMovieFromWatchlist(movie));
        }
        setIsPresent(!isPresent);
    }

  return (
    <div className='pt-[450px] pb-[300px] pl-[70px] px-[20px] py-[20px] absolute bg-gradient-to-r from-black text-white'>
        <h1 className='text-5xl pb-[15px] font-bold'>{movie.title}</h1>
        <span className='py-[3px] px-[8px] bg-gray-400 text-white rounded-lg bg-opacity-30'>{movie.adult? "U/A 18+" : "U/A 6+"}</span>
        <p className='w-[500px] text-gray-400 pt-[15px]'>{movie.overview} </p>
        <h1 className='mt-2'>Rating: {movie.vote_average}/10 ({Math.floor(movie.vote_count/1000)}.{Math.floor((movie.vote_count%100)/10)}k)</h1>
        <h1>Popularity: {movie.popularity}</h1>

        <div className='pt-[25px]'>
            <button className='bg-white text-black mr-[10px] w-[130px] h-[50px] rounded-lg text-xl hover:opacity-85'>
                ▶ Play
            </button>
            <button className='bg-gray-400 text-white mr-[10px] w-[130px] h-[50px] rounded-lg text-xl bg-opacity-40 ml-[10px]'>
              ⓘ More Info
            </button>
            <button 
                className='bg-gray-400 text-white mr-[10px] w-fit p-[10px] h-[50px] rounded-lg text-xl bg-opacity-40 ml-[10px]'
                onClick={handleButtonClick}>
                {!isPresent? "✙ Add to Watchlist" : "― Remove from watchlist"}
            </button>
        </div>
        
    </div>
  )
}

export default MoviePageVideoTitle;