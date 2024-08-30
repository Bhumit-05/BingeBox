import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar'
import { PURPLE_BG } from '../utils/Constants';

const GptSearch = () => {
  return (
    <div>
        <img className='w-full -z-10 absolute' src={PURPLE_BG} alt="bg"></img>
        <GptMovieSuggestions/>
        <GptSearchBar/>
    </div>
  )
}

export default GptSearch;