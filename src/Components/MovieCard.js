import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`, { state: {movie} });
  };
  
  return (
    <div className='mb-[20px] ml-[10px] w-[200px] pl-[20px] mt-[20px] transform transition duration-500 hover:scale-110 hover: cursor-pointer'>
        <img 
        className='rounded-3xl' 
        alt="movie card" 
        src={IMG_CDN_URL + movie.poster_path}
        onClick={handleClick}></img>
    </div>
  )
}

export default MovieCard;