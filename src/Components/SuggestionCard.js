import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants';
import { useNavigate } from 'react-router-dom';

const SuggestionCard = ({movie}) => {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/movie/${movie.id}`, { state: {movie} });
    };

    if(!movie) return;

    return (
        <div className='p-4 relative z-10'>
            <hr className='mb-[40px]'/>
            <div className='flex items-start flex-col md:flex-row '>
                <img 
                onClick={handleClick}
                className='w-[170px] ml-[90px] mb-[20px] md:mb-[10px] md:ml-0 mr-10 rounded-3xl transform transition duration-500 hover:scale-110 hover:shadow-lg hover: cursor-pointer' src={IMG_CDN_URL + movie.poster_path} alt={movie.title} />
                <div>
                    <span onClick={handleClick} className='text-2xl hover:text-shadow-custom-gold text-purple-400 font-bold cursor-pointer hover:text-custom-gold'>{movie.title}</span>
                    <p className=' text-white mt-2'>{movie.overview}</p>
                    <h1 className='mt-2 text-gray-400'>Rating: {movie.vote_average}/10 ({Math.floor(movie.vote_count/1000)}.{Math.floor((movie.vote_count%100)/10)}k)</h1>
                    <h1 className='mt-2 text-gray-400'>Release Date: {movie.release_date}</h1>
                </div>
            </div>
        </div>
    )
}

export default SuggestionCard;