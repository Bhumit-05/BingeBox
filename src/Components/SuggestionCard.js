import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants';

const SuggestionCard = ({movie}) => {
    if(!movie) return;
    console.log(movie);
    return (
        <div className='p-4 relative z-10'>
            <hr className='mb-[40px]'/>
            <div className='flex items-start '>
                <img className='w-[170px] mr-10 rounded-3xl transform transition duration-500 hover:scale-110 hover:shadow-lg hover: cursor-pointer' src={IMG_CDN_URL + movie.poster_path} alt={movie.title} />
                <div>
                    <h1 className='text-2xl text-purple-400 font-bold'>{movie.title}</h1>
                    <p className=' text-white mt-2'>{movie.overview}</p>
                    <h1 className='mt-2 text-gray-400'>Rating: {movie.vote_average}/10 ({Math.floor(movie.vote_count/1000)}.{Math.floor((movie.vote_count%100)/10)}k)</h1>
                    <h1 className='mt-2 text-gray-400'>Release Date: {movie.release_date}</h1>
                </div>
            </div>
        </div>
    )
}

export default SuggestionCard;